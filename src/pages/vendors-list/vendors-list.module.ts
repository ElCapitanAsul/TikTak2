import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VendorsListPage } from './vendors-list';

@NgModule({
  declarations: [
    VendorsListPage,
  ],
  imports: [
    IonicPageModule.forChild(VendorsListPage),
  ],
})
export class VendorsListPageModule {}
