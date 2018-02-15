import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TradeMarketingComponent } from './trade-marketing/trade-marketing.component';


const appRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'tm', component: TradeMarketingComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})

export class AppRoutingModule {
    
}