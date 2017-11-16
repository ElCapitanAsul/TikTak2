import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Generated class for the ClientsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clients-list',
  templateUrl: 'clients-list.html',
})
export class ClientsListPage {
	loading: string;
	clients: Array<{
		id: string,
		fname: string, 
		lname: string,
		email: string,
		rating: string,
		image: string,
	}>;
   message: string;
   vendor_id: string;

  	constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http, public alertCtrl: AlertController) {
  		this.clients = [{
				id: '',
				fname: '', 
				lname: '',
				email: '',
				rating: '',
				image: '',
			}];
		this.vendor_id = navParams.get('vendor_id');
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad ClientsListPage');
    	this.getAllClients();
  	}

   	refresh(){
  		this.message = 'refreshed';
  		this.getAllClients();	
  	}
  	
  	getAllClients(){
		this.loading = 'Loading...';
		// this.http.setHeader('Content-Type', 'application/json');
		// this.http.get('https://restcountries.eu/rest/v2/name/eesti')
		this.http.get('http://107.170.225.6/TikTakPHP/customer/selectAll.php')
			.map(res => res.json())
			.subscribe(
				data => {
			        this.clients = data;
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
	}	
	sendRequest(id){
		this.loading = 'loading...';
		let value = { "customer_id": id, "vendor_id" : this.vendor_id };

		let headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded;');

		const body = new URLSearchParams();
		Object.keys(value).forEach(key => {
		  body.set(key, value[key]);
		});
		this.http.post('http://107.170.225.6/TikTakPHP/requests/to_client.php', 
		  	body.toString(), 
		  	{headers}
		)
	  	.map(res => res.json())
	  	.subscribe(
		    data => {
	          	this.loading = '';
	          	this.showDialog(data.message);
	      	},(err: HttpErrorResponse) => {
            	if (err.error instanceof Error) {
              		this.loading = 'An error occurred:', err.error.message;
	            } else {
	              this.loading = `Backend returned code ${err.status}, body was: ${err.error}`;
	            }
	        }
	    );
	}	
	showDialog(message) {
	  let alert = this.alertCtrl.create({
	    title: message,
	    subTitle: '',
	    buttons: ['OK']
	  });
	  alert.present();
	}
}
