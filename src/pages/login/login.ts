import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupCustomerPage } from '../signup-customer/signup-customer';
import { SignupVendorPage } from '../signup-vendor/signup-vendor';

import { ClientsListPage } from '../clients-list/clients-list';
import { VendorsListPage } from '../vendors-list/vendors-list';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpErrorResponse } from '@angular/common/http';
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
  result: string;
  loading: string;
  message: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
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


  // openClientsListPage() {
  //   // close the menu when clicking a link from the menu
  //   // navigate to the new page if it is not the current page
  //   this.navCtrl.push(ClientsListPage);
  // }
  loginVendor(){
    this.loading = 'Loading...';
    // this.http.setHeader('Content-Type', 'application/json');
    // this.http.get('https://restcountries.eu/rest/v2/name/eesti')
    var body = {
      email : 'jixzignacio@gmail.com', 
      password : 'jesign'
    }

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    this.http.post('http://107.170.225.6/TikTakPHP/auth/loginVendor.php', body, 
    // {
      // headers: new HttpHeaders().set('Content-Type', 'application/json'),
      // headers: { "headers": 
      // {
      //   "Content-Type": "application/json",
      //   // "Access-Control-Allow-Origin": "*",
      // } 
      headers
    // },
    // }
    )
      .map(res => res.json())
      .subscribe(
        data => {
              this.result = data;
              this.loading = 'Done Loading';
          },
          (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                  // A client-side or network error occurred. Handle it accordingly.
                  this.message = 'An error occurred:', err.error.message;
                } else {
                  // The backend returned an unsuccessful response code.
                  // The response body may contain clues as to what went wrong,
                  this.message = `Backend returned code ${err.status}, body was: ${err.error}`;
                }
            }
        );
  }
  loginClient(){

  }

  openVendorsListPage() {
    // close the menu when clicking a link from the menu
    // navigate to the new page if it is not the current page
    this.navCtrl.push(VendorsListPage);
  }


}
