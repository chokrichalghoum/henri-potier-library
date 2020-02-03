import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BookModel } from '../models/book.model';
import { Observable } from 'rxjs';
import { OffersModel } from '../models/offers.model';

@Injectable()
export class LibelleConstantesService {
  public BUTTON_ADD_BASCKET = `Ajouter au panier`;
  public SEARCH = `Rechercher`;
  public ACHAT = `Continuer vos achats`;
  public PRICE = `Prix`;
  public TOTAL = `Total`;
  public commercialOffer = `Vous avez une réduction `;

  public PERCENTAGE = `percentage`;
  public MINUS = `minus`;
  public SLICE = `slice`;
  public TITLE_APP = `Henri Potier`;
}
