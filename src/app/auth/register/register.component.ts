import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService, formData } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  credentials: formData = {
    
    fullname: '',
    email: '',
    password: ''
   
  }
  

  registerForm: FormGroup;
  errors:any[]=[];

  constructor(private fb: FormBuilder,private auth: AuthService,private router: Router) { }

  ngOnInit(){
    this.initForm();
  }

  initForm():void {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(7)]]
    })
  }

  isInvalidForm(fieldName): boolean {
    return this.registerForm.controls[fieldName].invalid &&
           (this.registerForm.controls[fieldName].dirty || this.registerForm.controls[fieldName].touched)
  }

  isRequired(fieldName): boolean {
    return this.registerForm.controls[fieldName].errors.required
  }

  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigate(['/login', {registered: 'success'}]);
      },
      (errorResponse) => {
        this.errors = errorResponse.error.errors;
      })
  }

}
