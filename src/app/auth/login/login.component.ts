import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  isInvalidForm(fieldName): boolean {
    return this.loginForm.controls[fieldName].invalid &&
           (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched)
  }

  isRequired(fieldName): boolean {
    return this.loginForm.controls[fieldName].errors.required
  }

}