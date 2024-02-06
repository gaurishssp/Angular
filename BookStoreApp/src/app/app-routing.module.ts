import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './public-components/about-us/about-us.component';
import { HowItWorksComponent } from './public-components/how-it-works/how-it-works.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './public-components/home/home.component';

const routes : Routes = [
  {path:'',component: HomeComponent,pathMatch:'full'},
  //{path:'', redirectTo:'about-us',pathMatch:'full'}, // default route
  {path:'about-us',component:AboutUsComponent},
  {path:'how-it-works',component:HowItWorksComponent},
  {path:'auth',component:AuthComponent,
    loadChildren: ()=> import('./auth/auth.module').then((x)=>x.AuthModule),
  }, // lazy loading -> if auth is called then only child comp. will be called
  {path:'books',component:BooksComponent,
    loadChildren: ()=> import('./books/books.module').then((x)=>x.BooksModule),
  }, 
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
