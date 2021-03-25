import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent } from './home/home.component';
import {GallryComponent} from './gallary/gallry.component';
import {RegisterComponent } from './register/register.component';
import {LoginComponent } from './login/login.component';
const routes: Routes = [

  {
    path: '',
    component: HomeComponent
    },
    {
    path: 'gallary',
    component: GallryComponent
    },
    {
    path: 'login',
    component : LoginComponent
    },
     {
      path: 'register',
      component : RegisterComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
