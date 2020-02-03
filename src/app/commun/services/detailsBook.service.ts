import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable()
export class DetailsBookService {
  public book: BookModel;
}
