import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupCustomerPage } from './signup-customer';

@NgModule({
  declarations: [
    SignupCustomerPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupCustomerPage),
  ],
})
export class SignupCustomerPageModule {}
