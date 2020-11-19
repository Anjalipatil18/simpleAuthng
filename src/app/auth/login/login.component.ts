import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, Logindata } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  credentials: Logindata = {
    email: '',
    password: ''
  }

  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder,private auth:AuthService, private router:Router) { }

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
    console.log(this.credentials)
    this.auth.login(this.credentials).subscribe(
      ()=>{
        this.router.navigateByUrl('/home');
      },
      err =>{
        console.log(err)


      }
    )
  }

}