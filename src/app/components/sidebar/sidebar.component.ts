import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { ProfileService } from '../../shared/services/profile.service';
import { SubscriberCardComponent } from "./subscriber-card/subscriber-card.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ImageUrlPipe } from '../../shared/pipes/image-url.pipe';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgFor,
    SvgIconComponent,
    SubscriberCardComponent,
    RouterLink,
    AsyncPipe,
    JsonPipe,
    ImageUrlPipe,
    RouterLinkActive
],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  
  profileService = inject(ProfileService);
  me = this.profileService.me;

  subscribers$ = this.profileService.getSubscribersShortList()

  menuItems = [
    {
      label: 'My page',
      icon: 'home',
      link: 'profile/me'
    },
    {
      label: 'Chats',
      icon: 'chats',
      link: 'chats'
    },
    {
      label: 'Search',
      icon: 'search',
      link: 'search'
    }
  ];

  ngOnInit(): void {
    firstValueFrom(this.profileService.getMe())
  }
}
