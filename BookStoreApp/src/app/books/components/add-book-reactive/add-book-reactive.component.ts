import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.css']
})
export class AddBookReactiveComponent implements OnInit {

  public addBookForm: FormGroup;
  public titleErrorMessage: string;
  currencies : any[] = [{value:'USD',viewValue:'US Dollar'},{value:'INR',viewValue:'Indial Rupes'}];
  constructor(private _bookService: BookService,private _formBuilder: UntypedFormBuilder) {
    
  }
  ngOnInit(): void {
    this.initForm();
    
  }
  private initForm()
  {
    this.addBookForm = this._formBuilder.group({
      title: ['this is default', [Validators.required, Validators.minLength(10)]],
       author: '',
      totalPages: '',
      price: this._formBuilder.group({
        currency: '',
        value: ''
      }),
      publishedOn: '',
      isPublished: '',
      // formatType: '',
      // pdfFormat: '',
      // docFormat: '',
      //authors: this._formBuilder.array([this.getAuthorControl(), this.getAuthorControl()])
    });
    // this.addBookForm = new FormGroup({
    //   title: new FormControl(null,Validators.required),
    //   author: new FormControl('Gaurish',[Validators.required,Validators.minLength(10)]), // Set default value
    //   totalPages: new FormControl(),
    //   price: new FormGroup({ currency: new FormControl(),value: new FormControl() }),
    //   publishedOn: new FormControl(),
    //   isPublished: new FormControl(),
    //   formatType: new FormControl(),
    //   pdfFormat: new FormControl(),
    //   docFormat: new FormControl()
    //});
  }
  saveBook(): void {
    console.log(this.addBookForm.value);
    if(this.addBookForm.valid)
        this._bookService.addBook(this.addBookForm.value);
  }
  // private getAuthorControl(): UntypedFormGroup {
  //   return this._formBuilder.group({
  //     fullName: '',
  //     address: ''
  //   });
  // }


  // private validateTitleControl(titleControl: UntypedFormControl): void {
  //   this.titleErrorMessage = '';
  //   if (titleControl.errors && (titleControl.touched || titleControl.dirty)) {
  //     if (titleControl.errors?.required) {
  //       this.titleErrorMessage = 'This is a required field';
  //     } else if (titleControl.errors?.minlength) {
  //       this.titleErrorMessage = 'Minimum length is ' + titleControl.errors?.minlength?.requiredLength;
  //     }
  //   }
  // }

  // private formatTypeChanged(formatType: string): void {
  //   const pdfControl = this.addBookForm.get('pdfFormat');
  //   const docControl = this.addBookForm.get('docFormat');

  //   if (formatType === 'pdf') {
  //     pdfControl?.addValidators([Validators.required, Validators.minLength(10)]);
  //     docControl?.clearValidators();
  //   } else if (formatType === 'doc') {
  //     docControl?.addValidators(Validators.required);
  //     pdfControl?.clearValidators();
  //   }

  //   pdfControl?.updateValueAndValidity();
  //   docControl?.updateValueAndValidity();
  // }
}
