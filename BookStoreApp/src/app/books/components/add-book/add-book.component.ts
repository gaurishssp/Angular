import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  model: BookModel = new BookModel();
  @ViewChild('myForm') myForm : NgForm;
  constructor(private _bookService: BookService) { }
  ngOnInit(): void {
    this.model.title = "PowerApps";
    //this.model.author="Nitish WebGentle";
    this.model.isPublished = true;
    this.model.totalPages = 100;
    //this.model.publishedOn = Date.now;
    this.model.price = { currency: "INR", value: 100 }
  }
  //Two way binding Example
  saveBook(): void {
    if(this.myForm.valid)
        this._bookService.addBook(this.model);
  }
  //One Way Binding Example
  // saveBook(value: any): void{
  //   console.log(value)
  //   const book:BookModel = new BookModel();
  //   book.title=value.title;
  //   book.author=value.author;
  //   book.totalPages=value.pages;
  //   book.isPublished = value.isPublished;
  //   book.publishedOn = value.publishedOn;
  //   book.price= {currency:"INR" , value : value.price}
  //   this._bookService.addBook(book);
  // }
}
