import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.css']
})
export class RecentBooksComponent implements OnInit {
  public recentBooks:BookModel[]=[];
  constructor(private _bookservice:BookService) {
  
  }
  ngOnInit() : void
  {
    this.getRecentBooks();
  }
  private getRecentBooks() : void
  {
    const rBooks = this._bookservice.getRecentBooks();
    rBooks.forEach(b=>{
        var obj = new BookModel();
        obj.id = b.id;
        obj.author = b.author;
        obj.price = b.price;
        obj.title = b.title;
        obj.totalPages = b.totalPages;
        
        this.recentBooks.push(obj);
      });
      console.log(this.recentBooks);
  }
}
