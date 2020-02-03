import { Component, OnInit } from '@angular/core';
import { BackOfficeConnection } from '../../commun/services/backOffice.service';
import { BookModel } from '../../commun/models/book.model';
import { ExtractService } from '../../commun/services/ExtractService.service';
import { Router } from '@angular/router';
import { DetailsBookService } from 'src/app/commun/services/detailsBook.service';
import { BasketService } from '../../commun/services/basket.service';
import { SharedService } from '../../commun/services/sharedService';
import { LibelleConstantesService } from '../../commun/services/libellesConstantes.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css'],
})
export class AllBooksComponent implements OnInit {
  constructor(
    public backOfficeConnection: BackOfficeConnection,
    public extractService: ExtractService,
    private router: Router,
    public detailsBookService: DetailsBookService,
    public basketService: BasketService,
    public sharedService: SharedService,
    public libelleConstantesService: LibelleConstantesService,
  ) {
    this.sharedService.search$.subscribe((value: string) => {
      this.searchBook(value);
    });
  }

  books: BookModel[];
  allBooks: BookModel[];

  ngOnInit() {
    this.getListAllBooks();
  }

  getListAllBooks() {
    this.backOfficeConnection.getAllBooks().subscribe(
      data => {
        if (data.length) {
          this.books = data.filter(item => {
            item.synopsisLabel = this.extractService.extractDescription(item.synopsis[0]);
            return item;
          });
          // initier la liste de recherche sur les livres
          this.allBooks = this.books;
        }
      },
      error => {
        console.log('error');
      },
    );
  }

  goToDetailsBook(book: BookModel) {
    if (book !== null && book !== undefined && book.isbn !== null && book.isbn !== undefined) {
      this.detailsBookService.book = book;
      this.router.navigateByUrl('/henri-potier/all-books/' + book.isbn);
    }
  }

  /**
   *
   * @param search
   * Fonction de recherche sur les livres
   * par libelle et par synopsis
   */
  searchBook(search: string) {
    this.books = this.allBooks.filter(
      book =>
        book.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
        book.synopsis
          .toString()
          .toLowerCase()
          .includes(search.toLocaleLowerCase()),
    );
  }
}
