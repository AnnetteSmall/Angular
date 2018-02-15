import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-activities',
  templateUrl: './add-activities.component.html',
  styleUrls: ['./add-activities.component.css']
})
export class AddActivitiesComponent implements OnInit {
newActivityForm: FormGroup;
    channels = ['On Con', 'Off Con', 'Both'];
  constructor() { }

  ngOnInit() {
      this.newActivityForm = new FormGroup({
          'newActivityData': new FormGroup({
              'conceptName': new FormControl(null, [Validators.required]),
              'projectCoordinator': new FormControl(null, [Validators.required]),
              'startDate': new FormControl(null, [Validators.required]),
              'endDate': new FormControl(null, [Validators.required]),
              'channel': new FormControl('On Con'),
          }),
          });
      this.newActivityForm.statusChanges.subscribe(
          (status => console.log(status)
          ));
  }

    onSubmit() {
        console.log(this.newActivityForm);
        this.newActivityForm.reset();
    }

}
