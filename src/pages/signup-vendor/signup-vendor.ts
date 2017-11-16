import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServicesListPage } from '../services-list/services-list';
import { ClientsListPage } from '../clients-list/clients-list';

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
