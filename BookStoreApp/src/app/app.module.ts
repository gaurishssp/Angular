import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './public-components/about-us/about-us.component';
import { HowItWorksComponent } from './public-components/how-it-works/how-it-works.component';
import { HomeComponent } from './public-components/home/home.component';
import { BookService } from './books/services/book.service';
import { AddBookComponent } from './book/components/add-book/add-book.component';

@NgModule({
  declarations: [
    AppComponent,AboutUsComponent,HowItWorksComponent,HomeComponent, AddBookComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  exports : [AppRoutingModule],
  //providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
