import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupVendorPage } from './signup-vendor';

@NgModule({
  declarations: [
    SignupVendorPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupVendorPage),
  ],
})
export class SignupVendorPageModule {}
