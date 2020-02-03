import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BookModel } from '../models/book.model';
import { Observable } from 'rxjs';
import { OffersModel } from '../models/offers.model';

@Injectable()
export class LibellesConstansService {
  public MESSAGE_BOOK_IS_IN_BASKET = `Ce livre est déja en panier ! `;
  public MESSAGE_BOOK_IS_IN_BASKET_TITLE = `Information ! `;
}
