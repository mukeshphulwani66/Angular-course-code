import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import {HttpClientModule} from '@angular/common/http';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { CompB2Component } from './comp-b2/comp-b2.component'
@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    CompAComponent,
    CompBComponent,
    CompB2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
