import { Component, inject } from '@angular/core';
import { ProfileHeaderComponent } from '../../components/profile-header/profile-header.component';
import { ProfileService } from '../../shared/services/profile.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { AsyncPipe, NgFor } from '@angular/common';
import { SvgIconComponent } from '../../components/svg-icon/svg-icon.component';
import { ImageUrlPipe } from '../../shared/pipes/image-url.pipe';
import { PostFeedComponent } from "../profile-page/post-feed/post-feed.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ProfileHeaderComponent,
    AsyncPipe,
    RouterLink,
    SvgIconComponent,
    NgFor,
    ImageUrlPipe,
    PostFeedComponent
],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profileService = inject(ProfileService);
  route = inject(ActivatedRoute);
  subscribers$ = this.profileService.getSubscribersShortList()

  me$ = toObservable(this.profileService.me)

  profile$ = this.route.params
    .pipe(
      switchMap(({id}) => {
        if(id === 'me') return this.me$

        return this.profileService.getAccount(id)
      })
    )
}
