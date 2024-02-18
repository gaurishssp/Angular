import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ "providedIn":"root"})
export class BookAPIService {
  constructor(private _httpClient:HttpClient) { }

  public getBooks(): Observable<BookModel[]>
  {
    return this._httpClient.get<BookModel[]>('https://localhost:7130/api/books');
  }
  
  public addBook(bookModel: BookModel): Observable<BookModel> {
    return this._httpClient.post<BookModel>('https://localhost:7130/api/books', bookModel);
  }
}
