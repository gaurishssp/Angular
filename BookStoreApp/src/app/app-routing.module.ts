import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { ChangePasswordComponent } from './auth/components/change-password/change-password.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes : Routes = [
  {path:'', redirectTo:'about-us',pathMatch:'full'}, // default route
  {path:'about-us',component:AboutUsComponent},
  {path:'how-it-works',component:HowItWorksComponent},
  {path:'auth',component:AuthComponent,
    loadChildren: ()=> import('./auth/auth.module').then((x)=>x.AuthModule),
  }, // lazy loading -> if auth is called then only child comp. will be called
  {path:'**',component:NotFoundComponent}, // Not found route
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
})
export class AppRoutingModule { }
