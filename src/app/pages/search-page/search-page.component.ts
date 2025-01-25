import { Component, inject } from '@angular/core';
import { ProfileService } from '../../shared/services/profile.service';
import { Profile } from '../../shared/interfaces/profile.interface';
import { ProfileCardComponent } from '../../components/profile-card/profile-card.component';
import { ProfileFilterComponent } from './profile-filter/profile-filter.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [ProfileCardComponent,
    ProfileFilterComponent,
    AsyncPipe
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  profileService = inject(ProfileService)
  profiles = this.profileService.filteredProfiles
  

  constructor(){
    
  }
}
