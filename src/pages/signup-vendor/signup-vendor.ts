import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServicesListPage } from '../services-list/services-list';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpErrorResponse } from '@angular/common/http';


/**
 * Generated class for the SignupVendorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup-vendor',
  templateUrl: 'signup-vendor.html',
})
export class SignupVendorPage {
    vendors: Array<{
        fname: string, 
        lname: string,
        email: string,
        rating: string,
        image: string,
    }>;
    loading: string;

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        public http: Http,
        public alertCtrl: AlertController
    ) {
    
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SignupVendorPage');
    }

    attemptVendor(){
        this.loading = 'Loading...';
        // this.http.setHeader('Content-Type', 'application/json');
        // this.http.get('https://restcountries.eu/rest/v2/name/eesti')
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded;');

        // let value = { "fname": this.fname, "lname": this.lname, "email": this.email, "password": this.password};
        // // let body:string = 'email=' + this.email + '&password=' + this.password;

        // const body = new URLSearchParams();
        //     Object.keys(value).forEach(key => {
        //     body.set(key, value[key]);
        // });

        // this.http.post('http://107.170.225.6/TikTakPHP/vendor/insert.php', 
        //   body.toString(), 
        //   {headers}
        // )
        // .map(res => res.json())
        // .subscribe(
        //     data => {
        //         this.loading = JSON.stringify(data);
        //         this.result = data.message;
        //         if(data.data == 1){
        //             this.navCtrl.setRoot(ClientsListPage);
        //         }else {
        //             this.showRegFailed();
        //         }
        //     },
        //     (err: HttpErrorResponse) => {
        //         if (err.error instanceof Error) {
        //             // A client-side or network error occurred. Handle it accordingly.
        //             this.result = 'An error occurred:', err.error.message;
        //         } else {
        //             // The backend returned an unsuccessful response code.
        //             // The response body may contain clues as to what went wrong,
        //             this.result = `Backend returned code ${err.status}, body was: ${err.error}`;
        //         }
        //     }
        // );
    }



    openServicesListPage() {
        // close the menu when clicking a link from the menu
        // navigate to the new page if it is not the current page
        this.navCtrl.push(ServicesListPage, {
            fname: 'string',
            lname: 'string',
            email: 'string',
            password: 'string',
        });
    }

}
