import { Component, effect, inject, ViewChild } from '@angular/core';
import { ProfileHeaderComponent } from "../../components/profile-header/profile-header.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from '../../shared/services/profile.service';
import { firstValueFrom } from 'rxjs';
import { AvatarUploadComponent } from "./avatar-upload/avatar-upload.component";


@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    ProfileHeaderComponent,
    ReactiveFormsModule,
    AvatarUploadComponent
],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  fb = inject(FormBuilder);
  profileService = inject(ProfileService)

  @ViewChild(AvatarUploadComponent) avatarUploader!: AvatarUploadComponent

  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: [{value:'', disabled: true}, Validators.required],
    description: [''],
    stack: ['']
  })



  constructor() {
    
    
    effect(()=>{
      //@ts-ignore
      this.form.patchValue({
        ...this.profileService.me(),
        //@ts-ignore
        stack: this.mergeStack(this.profileService.me()?.stack)
      })
      
    })
    
  }



  onSave(){
    this.form.markAllAsTouched()
    this.form.updateValueAndValidity()

    if(this.form.invalid) return
    console.log(this.avatarUploader.avatar);
    

    if(this.avatarUploader.avatar) {
      firstValueFrom(this.profileService.uploadAvatar(this.avatarUploader.avatar))
    }
    
    //@ts-ignore
    firstValueFrom(this.profileService.patchProfile({
        ...this.form.value,
        stack: this.splitStack(this.form.value.stack)
      }))

  }

  splitStack(stack: string|null|string[]| undefined): string[]{
    if(!stack) return []
    if(Array.isArray(stack)) return stack

    return stack.split(',')
  }

  mergeStack(stack: string|null|string[]| undefined){
    if(!stack) return []
    if(Array.isArray(stack)) return stack.join(',')

    return stack
  }
}
