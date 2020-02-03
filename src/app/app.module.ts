import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookBasketComponent } from './components/book-basket/book-basket.component';
import { BackOfficeConnection } from './commun/services/backOffice.service';
import { HttpClientModule } from '@angular/common/http';
import { ExtractService } from './commun/services/ExtractService.service';
import { BasketService } from './commun/services/basket.service';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { DetailsBookService } from './commun/services/detailsBook.service';
import { SharedService } from './commun/services/sharedService';
import { LibelleConstantesService } from './commun/services/libellesConstantes.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, AllBooksComponent, BookBasketComponent, BookDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    BackOfficeConnection,
    HttpClientModule,
    ExtractService,
    BasketService,
    DetailsBookService,
    SharedService,
    LibelleConstantesService,
    { provide: LOCALE_ID, useValue: 'fr' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
