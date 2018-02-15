import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {StartModule} from './start/start.module';
import {NewModule} from './new/new.module';
import {ExistingModule} from './existing/existing.module';


import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StartModule,
      NewModule,
      ExistingModule,
      FormsModule,
      HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
