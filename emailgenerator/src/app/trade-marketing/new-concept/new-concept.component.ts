import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-new-concept',
  templateUrl: './new-concept.component.html',
  styleUrls: ['./new-concept.component.css']
})
export class NewConceptComponent implements OnInit {
newConceptForm: FormGroup;
    channels = ['On Con', 'Off Con', 'Both'];
  constructor() { }

  ngOnInit() {
      this.newConceptForm = new FormGroup({
          'newConceptData': new FormGroup({
              'conceptName': new FormControl(null, [Validators.required]),
              'projectCoordinator': new FormControl(null, [Validators.required]),
              'startDate': new FormControl(null, [Validators.required]),
              'endDate': new FormControl(null, [Validators.required]),
              'channel': new FormControl('On Con'),
          }),
          });
      this.newConceptForm.statusChanges.subscribe(
          (status => console.log(status)
          ));
  }

    onSubmit(){
        console.log(this.newConceptForm);
        this.newConceptForm.reset();
    }
    
}
