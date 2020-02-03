import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BookModel } from '../models/book.model';
import { Observable } from 'rxjs';
import { OffersModel } from '../models/offers.model';

@Injectable()
export class BackOfficeConnection {
  private allBooks: undefined | string = 'http://henri-potier.xebia.fr/books';

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(this.allBooks);
  }

  getOffersBooks(isbnSequence): Observable<OffersModel> {
    return this.http.get<OffersModel>(this.allBooks + '/' + isbnSequence + '/commercialOffers');
  }
}
