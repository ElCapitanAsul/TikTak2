import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { VendorsListPage } from '../vendors-list/vendors-list';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Generated class for the SignupCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup-customer',
  templateUrl: 'signup-customer.html',
})
export class SignupCustomerPage {
	loading: string;
	fname: string;
	lname: string;
	email: string;
	password: string;
	result: string;
	vendors: Array<{
    fname: string, 
    lname: string,
    email: string,
    rating: string,
    }>;
	

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public http: Http,
    public alertCtrl: AlertController
  	) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupCustomerPage');
  }

  attemptClient(){
    this.loading = 'Loading...';
    // this.http.setHeader('Content-Type', 'application/json');
    // this.http.get('https://restcountries.eu/rest/v2/name/eesti')
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;');

    let value = { "fname": this.fname, "lname": this.lname, "email": this.email, "password": this.password};
    // let body:string = 'email=' + this.email + '&password=' + this.password;

    const body = new URLSearchParams();
    Object.keys(value).forEach(key => {
      body.set(key, value[key]);
    });

    this.http.post('http://107.170.225.6/TikTakPHP/customer/insert.php', 
      body.toString(), 
      {headers}
    )
      .map(res => res.json())
      .subscribe(
        data => {
              this.loading = JSON.stringify(data);
              this.result = data.message;
              if(data.data == 1){
                this.navCtrl.setRoot(VendorsListPage);
              }else {
                this.showRegFailed();
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
 
  showRegFailed() {
    let alert = this.alertCtrl.create({
      title: 'Incorrect email or password!',
      subTitle: 'Please Try Again' + this.email + ' ' + this.password,
      buttons: ['OK']
    });
    alert.present();
  }

}
