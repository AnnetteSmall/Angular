import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExistingComponent } from './existing.component';
import { ExistingListComponent } from './existing-list/existing-list.component';
import { ExistingDetailComponent } from './existing-detail/existing-detail.component';
import { ExistingEditComponent } from './existing-edit/existing-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
    exports:[
        ExistingComponent
    ],
  declarations: [ExistingComponent, ExistingListComponent, ExistingDetailComponent, ExistingEditComponent]
})
export class ExistingModule { }
