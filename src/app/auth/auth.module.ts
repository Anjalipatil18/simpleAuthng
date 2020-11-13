import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import{Routes,RouterModule}  from '@angular/router';
import { CommonModule } from '@angular/common';

import{AuthComponent} from './auth.component';
import{RegisterComponent} from './register/register.component';
import{LoginComponent} from './login/login.component'
import { HomeComponent } from './home/home.component';

const routes:Routes=[
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component: HomeComponent}
]

@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    
  ]
})
export class AuthModule { }