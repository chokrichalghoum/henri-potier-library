import { TestBed, async, inject } from '@angular/core/testing';
import { ExtractService } from '../services/ExtractService.service';
import { HttpTestingController } from '@angular/common/http/testing';
import { BasketService } from '../services/basket.service';
import { Router } from '@angular/router';
import { BackOfficeConnection } from '../services/backOffice.service';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { LibelleConstantesService } from '../services/libellesConstantes.service';

describe('BasketService', () => {
  let service;

  // Injection de module de test
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BasketService,
        HttpTestingController,
        BackOfficeConnection,
        HttpClient,
        HttpHandler,
        LibelleConstantesService,
        {
          provide: Router,
          useClass: MockRouter,
        },
      ],
    });
  });

  beforeEach(inject([BasketService, HttpTestingController], (conf: BasketService) => {
    service = conf;
  }));

  it('should return min value of (minus & percentage) ===> minus', () => {
    const price = 50;
    const offers = [{ type: 'minus', value: 15 }, { type: 'percentage', value: 4 }];
    const result = service.computeBestPrice(price, offers);
    expect(result).toBe(35);
  });

  it('should return min value of (minus & percentage)==> percentage', () => {
    const price = 50;
    const offers = [{ type: 'minus', value: 1 }, { type: 'percentage', value: 4 }];
    const result = service.computeBestPrice(price, offers);
    expect(result).toBe(48);
  });

  it('should return list isbn in string format', () => {
    const booksList = [
      { isbn: 'test1', title: 'test1', price: 'test1', cover: 'test1', synopsis: 'test1', synopsisLabel: 'test1', quantity: 1 },
      { isbn: 'test2', title: 'test1', price: 'test1', cover: 'test1', synopsis: 'test1', synopsisLabel: 'test1', quantity: 1 },
    ];
    const isbnList = [];
    const result = service.extractIsbnFromList(isbnList, booksList);
    expect(result).toBe('test1,test2');
  });

  it('should return list of book when add a new Book', () => {
    const booksList = [
      { isbn: 'test1', title: 'test1', price: 'test1', cover: 'test1', synopsis: 'test1', synopsisLabel: 'test1', quantity: 1 },
    ];
    const book = { isbn: 'test1', title: 'test1', price: 'test1', cover: 'test1', synopsis: 'test1', synopsisLabel: 'test1', quantity: 1 };
    const result = service.addToBasket(book);
    expect(result).toEqual(booksList);
  });
});

class MockRouter {
  navigate = jasmine.createSpy('navigateByUrl');
}
