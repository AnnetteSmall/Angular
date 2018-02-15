import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {
    
  constructor() { }

  ngOnInit() {
  }

    onSubmit() {
        console.log();
    }
    
    onDeleteIngredient(){
        
    }
    
    onAddIngredient(){
        
    }
}
