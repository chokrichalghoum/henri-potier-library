import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { BasketService } from '../../commun/services/basket.service';
import { BackOfficeConnection } from '../../commun/services/backOffice.service';
import { Router } from '@angular/router';
import { SharedService } from '../../commun/services/sharedService';
import { LibelleConstantesService } from '../../commun/services/libellesConstantes.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        BasketService,
        BackOfficeConnection,
        SharedService,
        HttpClient,
        HttpHandler,
        LibelleConstantesService,
        {
          provide: Router,
          useClass: MockRouter,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create HeaderComponent', () => {
    expect(component).toBeTruthy();
  });
});

class MockRouter {
  navigate = jasmine.createSpy('navigateByUrl');
}
