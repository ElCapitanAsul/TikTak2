import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  email: string;
  password: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: Http,
    public alertCtrl: AlertController

    ) {
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
  loginVendor() {
    console.log(this.email);
    console.log(this.password);
    this.attemptVendor();
  }
  attemptVendor(){
    this.loading = 'Loading...';
    // this.http.setHeader('Content-Type', 'application/json');
    // this.http.get('https://restcountries.eu/rest/v2/name/eesti')
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;');

    let value = { "email": this.email, "password": this.password };
    // let body:string = 'email=' + this.email + '&password=' + this.password;

    const body = new URLSearchParams();
    Object.keys(value).forEach(key => {
      body.set(key, value[key]);
    });

    this.http.post('http://107.170.225.6/TikTakPHP/auth/loginVendor.php', 
      body.toString(), 
      {headers}
    )
      .map(res => res.json())
      .subscribe(
        data => {
              let status = data.status;
              this.loading = JSON.stringify(data);
              this.result = data.message;
              if(data.status == 1){
                this.navCtrl.setRoot(ClientsListPage);
              }else {
                this.showAuthFailed();
              }
          },
          (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                  // A client-side or network error occurred. Handle it accordingly.
                  this.result = 'An error occurred:', err.error.message;
                } else {
                  // The backend returned an unsuccessful response code.
                  // The response body may contain clues as to what went wrong,
                  this.result = `Backend returned code ${err.status}, body was: ${err.error}`;
                }
            }
        );
  }
  loginClient(){

  }
  showAuthFailed() {
    let alert = this.alertCtrl.create({
      title: 'Incorrect email or password!',
      subTitle: 'Please Try Again' + this.email + ' ' + this.password,
      buttons: ['OK']
    });
    alert.present();
  }

  openVendorsListPage() {
    // close the menu when clicking a link from the menu
    // navigate to the new page if it is not the current page
    this.navCtrl.push(VendorsListPage);
  }


}
