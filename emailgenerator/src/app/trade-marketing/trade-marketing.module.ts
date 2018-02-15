import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { CommonModule } from '@angular/common';

import { AddActivitiesComponent } from './add-activities/add-activities.component';
import { AddKpiComponent } from './add-kpi/add-kpi.component';
import { TradeMarketingComponent } from './trade-marketing.component';
import { ViewConceptComponent } from './view-concept/view-concept.component';
import { NewConceptComponent } from './new-concept/new-concept.component';


@NgModule({
    declarations: [
        AddActivitiesComponent,
        AddKpiComponent,
        ViewConceptComponent,
        NewConceptComponent,
        TradeMarketingComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
    ],

})
export class TradeMarketingModule { }

