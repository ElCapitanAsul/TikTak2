import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpErrorResponse } from '@angular/common/http';
/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

	vendors: Array<{
		fname: string, 
		lname: string,
		email: string,
		rating: string,
		image: string,
	}>;
   message: string;
   loading: string;

  	constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
        this.vendors = [{
			fname: 'string', 
			lname: 'string',
			email: 'string',
			rating: 'string',
			image: 'string',
		}];
  	}

  	ionViewDidLoad() {
		console.log('ionViewDidLoad TestPage');
		this.getAllVendors();
  	}
  	refresh(){
  		this.message = 'refreshed';
  		this.getAllVendors();	
  	}
  	
  	getAllVendors(){
		this.loading = 'Loading...';
		// this.http.setHeader('Content-Type', 'application/json');
		// this.http.get('https://restcountries.eu/rest/v2/name/eesti')
		this.http.get('http://localhost/TikTakPHP/vendor/selectAll.php')
			.map(res => res.json())
			.subscribe(
				data => {
			        this.vendors = data;
			        this.loading = 'Done Loading';
	    		},
	    		// err => {
	    		// 	this.message = "Error occured";
	    		// }
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

	    // this.http.get('http://107.170.225.6/TikTakPHP/vendor/selectAll.php', {}, {
	    // 	'Content-Type':  'application/json'
	    // })
     //  	.then(data => {
	    //     console.log(data.status);
	    //     console.log(data.data); // data received by server
	    //     console.log(data.headers);
	    	
	    // 	// this.vendors = data.data.json();
     //     	this.message = 'success: ' + data.data.json().toString();
     //     	this.loading  = 'Successfully loaded';
     //  	})
     //  	.catch(error => {
     //  		this.loading = 'Loaded with error';
	    //     console.log(error.status);
	    //     console.log(error.error); // error message as string
	    //     console.log(error.headers);
     //      	this.message ='error: ' + error.status + error.status + error.headers;
     //  	});  		
  	}
}
