import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    console.log(this.form.getRawValue());
  }
}
