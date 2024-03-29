import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { BookAPIService } from '../../services/books.api.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css'],
  //providers:[BookService]
})
export class AllBooksComponent implements OnInit {
  public books: BookModel[] = [];
  constructor(public bookservice:BookAPIService) {
  
  }
  ngOnInit(): void {
      this.getAllBooks();
      console.log(this.books);
  }
  private getAllBooks(): void {
    this.bookservice.getBooks()
      .subscribe(books => {
        this.books = books;
      });
  }
}

// Static data code
// export class AllBooksComponent implements OnInit {
//   public books: BookModel[] = [];
//   constructor(public bookservice:BookService) {
  
//   }
//   ngOnInit(): void {
//       const allBooks = this.bookservice.getBooks();
//       allBooks.forEach(b=>{
//         var obj = new BookModel();
//         obj.id = b.id;
//         obj.author = b.author;
//         obj.price = b.price;
//         obj.title = b.title;
//         obj.totalPages = b.totalPages;
//         obj.isPublished = b.isPublished;
//         obj.publishedOn = b.publishedOn;
//         this.books.push(obj);
//       });
//       console.log(this.books);
//   }
