import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { SubNavigationComponent } from './sub-navigation/sub-navigation.component';
import { HrComponent } from './hr/hr.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { SharedModule } from './shared/shared.module';
import { TradeMarketingModule } from './trade-marketing/trade-marketing.module';



@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    HrComponent,
    HomeComponent,
    MainNavigationComponent,
    SubNavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TradeMarketingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
