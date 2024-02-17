import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.css']
})
export class AddBookReactiveComponent implements OnInit {
  
  public addBookForm: FormGroup;
  currencies : any[] = [{value:'USD',viewValue:'US Dollar'},{value:'INR',viewValue:'Indial Rupes'}];
  constructor(private _bookService: BookService) {
    
  }
  ngOnInit(): void {
    this.initForm();
    
  }
  private initForm()
  {
    this.addBookForm = new FormGroup({
      title: new FormControl(null,Validators.required),
      author: new FormControl('Gaurish',[Validators.required,Validators.minLength(10)]), // Set default value
      totalPages: new FormControl(),
      price: new FormGroup({ currency: new FormControl(),value: new FormControl() }),
      publishedOn: new FormControl(),
      isPublished: new FormControl(),
      formatType: new FormControl(),
      pdfFormat: new FormControl(),
      docFormat: new FormControl()
    });
  }
  saveBook(): void {
    console.log(this.addBookForm.value);
    if(this.addBookForm.valid)
        this._bookService.addBook(this.addBookForm.value);
  }
}
