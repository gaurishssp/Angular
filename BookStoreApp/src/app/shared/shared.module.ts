import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { HttpClientModule } from '@angular/common/http';
import { BoolformatPipe } from './pipes/boolformat.pipe';


@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent,
    FooterComponent,
    AuthorComponent,
    BoolformatPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HttpClientModule
  ],
  exports:[ToolbarComponent,FooterComponent,MaterialModule,AuthorComponent,HttpClientModule,BoolformatPipe]
})
export class SharedModule { }
