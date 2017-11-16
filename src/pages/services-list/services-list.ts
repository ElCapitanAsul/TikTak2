import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpErrorResponse } from '@angular/common/http';

import { ClientsListPage } from '../clients-list/clients-list';
/**
 * Generated class for the ServicesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services-list',
  templateUrl: 'services-list.html',
})
export class ServicesListPage {
	services: Array<{
		id: 0,
		name: string, 
		isChecked: boolean
	}>;
	/* request */
	message: string;
 	loading: string;
 	/* Vendor Sign up*/
 	fname: string;
 	lname: string;
 	email: string;
 	password: string;

 	host: string;


  	constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
		this.services = [{
			id: 0,
			name: '', 
			isChecked: false
		}];
		this.fname = navParams.get('fname');
		this.lname = navParams.get('lname');
		this.email = navParams.get('email');
		this.password = navParams.get('password');
		this.host = '107.170.225.6';
  	}

  	ionViewDidLoad() {
	    console.log('ionViewDidLoad ServicesListPage');
	    this.getAllServices(); 
   	}

   	refresh(){
  		this.message = 'refreshed';
  		this.getAllServices();	
  	}
  	
  	getAllServices(){
		this.loading = 'Loading...';
		// this.http.setHeader('Content-Type', 'application/json');
		// this.http.get('https://restcountries.eu/rest/v2/name/eesti')
		this.http.get('http://' + this.host + '/TikTakPHP/services/selectAll.php')
			.map(res => res.json())
			.subscribe(
				data => {
					this.loading = '';
			        this.services = data;
			        // this.loading = JSON.stringify(data);
			        console.log(this.services);
	    		},	
	    		(err: HttpErrorResponse) => {
    		      	if (err.error instanceof Error) {
	    		        // A client-side or network error occurred. Handle it accordingly.
	    		        this.loading = 'An error occurred:', err.error.message;
    		      	} else {
	    		        // The backend returned an unsuccessful response code.
	    		        // The response body may contain clues as to what went wrong,
	    		        this.loading = `Backend returned code ${err.status}, body was: ${err.error}`;
    		      	}
    		    }
	    	);
	}
	checkService(){
		console.log(this.services);
	}
	select(){
		this.loading = 'loading...';
		let headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded;');

		let value = { "fname": this.fname, "lname" : this.lname, "email": this.email, "password": this.password, "services" : JSON.stringify(this.services) };

		const body = new URLSearchParams();
		Object.keys(value).forEach(key => {
		  body.set(key, value[key]);
		});
		this.http.post('http://' + this.host + '/TikTakPHP/vendor/insert.php', 
		  body.toString(), 
		  {headers}
		)
		  .map(res => res.json())
		  .subscribe(
		    data => {
		          this.loading = '';
		          // this.message = data.message;
		          this.navCtrl.setRoot(ClientsListPage, {vendor_id : data.vendor_id});
	      	},(err: HttpErrorResponse) => {
		            if (err.error instanceof Error) {
		              	this.loading = 'An error occurred:', err.error.message;
		            } else {
		              this.loading = `Backend returned code ${err.status}, body was: ${err.error}`;
		            }
		        }
		    );
	}
}

  