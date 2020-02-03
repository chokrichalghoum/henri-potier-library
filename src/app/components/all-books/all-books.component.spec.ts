import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBooksComponent } from './all-books.component';
import { BackOfficeConnection } from '../../commun/services/backOffice.service';
import { ExtractService } from '../../commun/services/ExtractService.service';
import { DetailsBookService } from '../../commun/services/detailsBook.service';
import { BasketService } from '../../commun/services/basket.service';
import { SharedService } from '../../commun/services/sharedService';
import { LibelleConstantesService } from '../../commun/services/libellesConstantes.service';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

describe('AllBooksComponent', () => {
  let component: AllBooksComponent;
  let fixture: ComponentFixture<AllBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllBooksComponent],
      providers: [
        BackOfficeConnection,
        ExtractService,
        DetailsBookService,
        BasketService,
        SharedService,
        LibelleConstantesService,
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
    fixture = TestBed.createComponent(AllBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AllBooksComponent', () => {
    expect(component).toBeTruthy();
  });
});

class MockRouter {
  navigate = jasmine.createSpy('navigateByUrl');
}
