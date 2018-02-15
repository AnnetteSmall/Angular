import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') sgnForm: NgForm;
  defaultSelect = 'advanced';
  formDetails = {
    email: '',
    option: '',
    pasword: '',
  }

  onSubmit() {
    console.log(this.sgnForm.value);
  }

}
