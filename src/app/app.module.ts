import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from './app.component';
import {StoreModule} from "@ngrx/store";
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}), // FIXME: Pass in the name of the reducer for the root state of the application; for now pass an empty object.
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
