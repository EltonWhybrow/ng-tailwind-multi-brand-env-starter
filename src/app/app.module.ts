import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapboxModule } from 'mapbox';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MapboxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
