import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errors:any[]=[];

  constructor(private fb: FormBuilder) { }

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

  register(){
   
  }  

}
