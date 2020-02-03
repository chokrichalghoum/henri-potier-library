import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { BasketService } from './commun/services/basket.service';
import { BackOfficeConnection } from './commun/services/backOffice.service';
import { SharedService } from './commun/services/sharedService';
import { LibelleConstantesService } from './commun/services/libellesConstantes.service';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, HeaderComponent, FooterComponent],
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
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Bibliothèque de Henri Potier'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Bibliothèque de Henri Potier');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.container').textContent).toContain('Henri Potier');
  });
});

class MockRouter {
  navigate = jasmine.createSpy('navigateByUrl');
}
