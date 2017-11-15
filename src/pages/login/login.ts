import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupCustomerPage } from '../signup-customer/signup-customer';
import { SignupVendorPage } from '../signup-vendor/signup-vendor';

import { ClientsListPage } from '../clients-list/clients-list';
import { VendorsListPage } from '../vendors-list/vendors-list';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openCustomerPage() {
    // close the menu when clicking a link from the menu
    // navigate to the new page if it is not the current page
    this.navCtrl.push(SignupCustomerPage);
  }

  openVendorPage() {
    // close the menu when clicking a link from the menu
    // navigate to the new page if it is not the current page
    this.navCtrl.push(SignupVendorPage);
  }


  openClientsListPage() {
    // close the menu when clicking a link from the menu
    // navigate to the new page if it is not the current page
    this.navCtrl.push(ClientsListPage);
  }

  openVendorsListPage() {
    // close the menu when clicking a link from the menu
    // navigate to the new page if it is not the current page
    this.navCtrl.push(VendorsListPage);
  }


}
