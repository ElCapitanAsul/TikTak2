import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

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

  	constructor(public navCtrl: NavController, public navParams: NavParams,private http: HTTP) {
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
	    this.http.get('http://107.170.225.6/TikTakPHP/vendor/selectAll.php', {}, {})
      	.then(data => {
	        console.log(data.status);
	        console.log(data.data); // data received by server
	        console.log(data.headers);
	    	
	    	this.vendors = data.data;
      	})
      	.catch(error => {

	        console.log(error.status);
	        console.log(error.error); // error message as string
	        console.log(error.headers);
      	});
  	}
  	

}
