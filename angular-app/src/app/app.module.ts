import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import  {AppComponent }from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { CcodePipe } from '../pipes/ccode.pipe'
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UsersComponent,
    HighlightDirective,
    CcodePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
