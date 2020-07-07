import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      field1: ['value1', [Validators.required]],
      field2: ['value2', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
