import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import {AuthService} from '../shared/auth.service';

import {Router} from '@angular/router';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder,
             
              private router:Router) { }

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

  login(){
    // this.auth.login(this.loginForm.value).subscribe(
    //   (token)=>{
    //     this.router.navigate(['/home']);
    //   },
    //   (error)=>{
    //     console.log(error);
    //    } )
  }
}