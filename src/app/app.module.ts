import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { WikiModule } from './wiki/wiki.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SharedModule,
    WikiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
