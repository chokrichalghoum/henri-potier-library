import { BasketService } from './../../commun/services/basket.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsComponent } from './book-details.component';
import { BackOfficeConnection } from '../../commun/services/backOffice.service';
import { DetailsBookService } from '../../commun/services/detailsBook.service';
import { Router } from '@angular/router';
import { LibelleConstantesService } from '../../commun/services/libellesConstantes.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpHandler, HttpClient } from '@angular/common/http';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookDetailsComponent],
      imports: [RouterTestingModule],
      providers: [
        DetailsBookService,
        BasketService,
        LibelleConstantesService,
        BackOfficeConnection,
        HttpHandler,
        HttpClient,
        {
          provide: Router,
          useClass: MockRouter,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create BookDetailsComponent', () => {
    expect(component).toBeTruthy();
  });
});

class MockRouter {
  navigate = jasmine.createSpy('navigateByUrl');
}
