import { Component, Input } from '@angular/core';
import { Profile } from '../../../shared/interfaces/profile.interface';
import { ImageUrlPipe } from '../../../shared/pipes/image-url.pipe';

@Component({
  selector: 'app-subscriber-card',
  standalone: true,
  imports: [ImageUrlPipe],
  templateUrl: './subscriber-card.component.html',
  styleUrl: './subscriber-card.component.scss'
})
export class SubscriberCardComponent {
  @Input() profile!: Profile
}
