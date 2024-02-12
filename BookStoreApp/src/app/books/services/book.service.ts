import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({ "providedIn":"root"})
export class BookService {

  constructor() { }

  public getBooks(): any[]
  {
    return [{
      "id": 1,
      "title": "Angular Fundamentals",
      "totalPages": 453,
      "author": "Ram Singh",
      "price": { "currency": "INR", "value": 199 }
    },
    {
      "id": 2,
      "title": "Java Fundamentals",
      "totalPages": 653,
      "author": "Rekha Mehta",
      "price": { "currency": "INR", "value": 300 }
    },
    {
      "id": 3,
      "title": "C# Fundamentals",
      "totalPages": 768,
      "author": "Shirish Bhatt",
      "price": { "currency": "INR", "value": 798 }
    },
    {
      "id": 4,
      "title": "SQL Fundamentals",
      "totalPages": 666,
      "author": "Rani Mukharji",
      "price": { "currency": "INR", "value": 766 }
    },
    {
      "id": 5,
      "title": "Programming basics",
      "totalPages": 437,
      "author": "Jacky Singh",
      "price": { "currency": "INR", "value": 321 }
    }];
  }
  public getRecentBooks(): any[]
  {
    return [{
      "id": 1,
      "title": "Angular Fundamentals",
      "totalPages": 453,
      "author": "Ram Singh",
      "price": { "currency": "INR", "value": 199 }
    },
    {
      "id": 3,
      "title": "C# Fundamentals",
      "totalPages": 768,
      "author": "Shirish Bhatt",
      "price": { "currency": "INR", "value": 798 }
    }];
  }
}
