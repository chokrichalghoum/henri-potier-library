import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBasketComponent } from './book-basket.component';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BasketService } from '../../commun/services/basket.service';
import { LibelleConstantesService } from '../../commun/services/libellesConstantes.service';
import { BackOfficeConnection } from '../../commun/services/backOffice.service';

describe('BookBasketComponent', () => {
  let component: BookBasketComponent;
  let fixture: ComponentFixture<BookBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookBasketComponent],
      providers: [
        HttpHandler,
        HttpClient,
        BackOfficeConnection,
        BasketService,
        LibelleConstantesService,
        {
          provide: Router,
          useClass: MockRouter,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create BookBasketComponent', () => {
    expect(component).toBeTruthy();
  });
});

class MockRouter {
  navigate = jasmine.createSpy('navigateByUrl');
}
