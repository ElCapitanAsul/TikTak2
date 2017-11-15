import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupCustomerPage } from '../pages/signup-customer/signup-customer';
import { SignupVendorPage } from '../pages/signup-vendor/signup-vendor';
import { ClientsListPage } from '../pages/clients-list/clients-list';
import { VendorsListPage } from '../pages/vendors-list/vendors-list';
import { ServicesListPage } from '../pages/services-list/services-list';


import { TestPage} from '../pages/test/test';

/* Providers */
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    SignupCustomerPage,
    SignupVendorPage,

    ClientsListPage,
    VendorsListPage,
    ServicesListPage,
    TestPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    SignupCustomerPage,
    SignupVendorPage,

    ClientsListPage,
    VendorsListPage,
    ServicesListPage,
    TestPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
