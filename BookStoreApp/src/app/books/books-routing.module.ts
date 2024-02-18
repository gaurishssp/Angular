import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AddBookReactiveComponent } from './components/add-book-reactive/add-book-reactive.component';

const routes: Routes = [//{path:'', redirectTo:'all-books',pathMatch:'full'},
{
  path: '',component: AllBooksComponent,
  // children: [
  //     { path: ':id', component: BookDetailsComponent }]
},
{path:'recent',component:RecentBooksComponent,title:'Recent'}
,{path:'id',component:BookDetailsComponent}
,{path:'new',component:AddBookComponent,title:'Add Book'}
,{path:'new-reactive',component:AddBookReactiveComponent,title:'Add Book Reative'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
