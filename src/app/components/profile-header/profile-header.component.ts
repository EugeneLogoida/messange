import { Component, input } from '@angular/core';
import { Profile } from '../../shared/interfaces/profile.interface';
import { ImageUrlPipe } from '../../shared/pipes/image-url.pipe';


@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [
    ImageUrlPipe,
    
  ],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent {
  profile = input<Profile>()
}
