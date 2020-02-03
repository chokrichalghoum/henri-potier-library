import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';
import { Router } from '@angular/router';
import { BackOfficeConnection } from './backOffice.service';
import { OffersModel } from '../models/offers.model';
import { LibelleConstantesService } from './libellesConstantes.service';
import { CommercialOffersModel } from '../models/commercialOffers.model';

@Injectable()
export class BasketService {
  constructor(
    private router: Router,
    public backOfficeConnection: BackOfficeConnection,
    public libelleConstantesService: LibelleConstantesService,
  ) {}

  public listBook = new Array<BookModel>();
  public listOffers = new Array<OffersModel>();
  public sizeBasket = 0;
  public totalPriceBasket = 0;
  public priceMinus = 0;
  public listIsbn = [];
  public maxPourcentage = 0;
  public maxMinus = 0;
  public maxSlice = 0;
  public priceOffres: number[];

  /**
   *
   * @param book ajouter de contenu dans le panier
   */
  public addToBasket(book: BookModel): Array<BookModel> {
    if (book !== null && book !== undefined) {
      if (!this.listBook.some(item => item.isbn === book.isbn)) {
        book.quantity = +1;
        this.listBook.push(book);
        this.sizeBasket = this.sizeBasket * 1 + 1;
        this.computeBestCommercialOffers();
        return this.listBook;
      }
    }
  }

  /**
   *
   * @param book supprimer element du panier
   */
  public removeFromBasket(book: BookModel): Array<BookModel> {
    if (book !== null && book !== undefined) {
      const index: number = this.listBook.indexOf(book);
      if (index !== -1) {
        this.listBook.splice(index, 1);
        this.sizeBasket = this.sizeBasket * 1 - 1;
        this.computeBestCommercialOffers();
      }
    }
    if (this.listBook.length === 0) {
      this.router.navigateByUrl('/henri-potier/all-books');
    }
    return this.listBook;
  }

  /**
   *
   * @param book Gérer la quantité de chaque livre
   */
  addQuantity(book: BookModel) {
    if (book !== null && book !== undefined) {
      book.quantity = book.quantity * 1 + 1;
    }
    this.priceMinus = 0;
    this.computeBestCommercialOffers();
  }

  removeQuantity(book: BookModel) {
    if (book !== null && book !== undefined) {
      if (book.quantity > 1) {
        book.quantity = book.quantity * 1 - 1;
      }
      this.priceMinus = 0;
      this.computeBestCommercialOffers();
    }
  }

  /**
   * récupération des Ids de la part de liste
   */
  extractIsbnFromList(listIsbn: string[], listBook: Array<BookModel>): string {
    for (const row of listBook) {
      if (!listIsbn.includes(row.isbn)) {
        listIsbn.push(row.isbn);
      }
    }
    return listIsbn.toString();
  }

  /**
   * Application de regle de calcule
   * faute de temps l'algorithme n'est pas optimisé
   */
  computeBestCommercialOffers(): any {
    this.totalPriceBasket = 0;
    for (const row of this.listBook) {
      this.totalPriceBasket = this.totalPriceBasket + row.price * (row.quantity * 1);
    }
    this.backOfficeConnection.getOffersBooks(this.extractIsbnFromList(this.listIsbn, this.listBook)).subscribe(
      (data: OffersModel) => {
        if (data.offers) {
          this.totalPriceBasket = this.computeBestPrice(this.totalPriceBasket, data.offers);
          return this.totalPriceBasket;
        }
      },
      error => {
        console.log('error ***************');
        return 0;
      },
    );
  }

  /**
   *
   */

  computeBestPrice(price: number, offres: any[]) {
    let rem = 0;
    this.priceOffres = [];
    offres.forEach(offre => {
      switch (offre.type) {
        case 'percentage': {
          this.priceOffres.push(price - (price * offre.value) / 100);
          break;
        }
        case 'minus': {
          this.priceOffres.push(price - offre.value);
          break;
        }
        case 'slice': {
          if (price > 100) {
            rem = Math.trunc(price / offre.sliceValue) * offre.value;
          }
          break;
        }
        default: {
          break;
        }
      }
    });
    if (rem > 0) {
      this.priceMinus = rem; // a afficher aussi si'il y'a une offre slice
      return price;
    }
    if (this.priceOffres.length > 0) {
      return Math.min(...this.priceOffres);
    }
    return price;
  }
}
