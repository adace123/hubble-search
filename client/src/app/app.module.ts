import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HubbleImagesComponent } from './components/hubble-images/hubble-images.component';
import { HubbleSingleImageComponent } from './components/hubble-single-image/hubble-single-image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HubbleImagesComponent,
    HubbleSingleImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
