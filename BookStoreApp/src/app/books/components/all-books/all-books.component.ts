import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css'],
  //providers:[BookService]
})
export class AllBooksComponent implements OnInit {
  public books: BookModel[] = [];
  constructor(public bookservice:BookService) {
  
  }
  ngOnInit(): void {
      this.books = this.bookservice.getBooks();
      console.log(this.books);
  }
}
