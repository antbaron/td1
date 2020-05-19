import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThanosComponent } from './thanos/thanos.component';
import { PoudlardComponent } from './poudlard/poudlard.component';

@NgModule({
  declarations: [
    AppComponent,
    ThanosComponent,
    PoudlardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
