import { BackOfficeConnection } from './../services/backOffice.service';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BackOfficeConnection', () => {
  let service;
  let http;
  let backend;

  // Injection de module de test
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BackOfficeConnection],
    });
  });

  // création de module de test
  beforeEach(inject(
    [BackOfficeConnection, HttpClient, HttpTestingController],
    (conf: BackOfficeConnection, httpParam: HttpClient, backendParam: HttpTestingController) => {
      service = conf;
      http = httpParam;
      backend = backendParam;
    },
  ));
  // vérification aprés le test
  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should get list book', () => {
    service.getAllBooks().subscribe(res => {
      expect(res).toBe('book');
    });

    const req = backend.expectOne({
      url: 'http://henri-potier.xebia.fr/books',
      method: 'GET',
    });
    // utilisé pour mettre fin de la souscription de test
    req.flush('book', { status: 200, statusText: 'ok' });
  });

  it('should get offer commercial', () => {
    const mockIsbnSequence = { isbnSequence: 'a460afed-e5e7-4e39-a39d-c885c05db861' };
    service.getOffersBooks(mockIsbnSequence.isbnSequence).subscribe(res => {
      expect(res).toBe('commercialOffers');
    });

    const req = backend.expectOne({
      url: 'http://henri-potier.xebia.fr/books/' + mockIsbnSequence.isbnSequence + '/commercialOffers',
      method: 'GET',
    });
    // utilisé pour mettre fin de la souscription de test
    req.flush('commercialOffers', { status: 200, statusText: 'ok' });
  });
});
