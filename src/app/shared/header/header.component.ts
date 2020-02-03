import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from '../../commun/services/basket.service';
import { SharedService } from '../../commun/services/sharedService';
import { LibelleConstantesService } from '../../commun/services/libellesConstantes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    public basketService: BasketService,
    public sharedService: SharedService,
    public libelleConstantesService: LibelleConstantesService,
  ) {}

  ngOnInit() {}

  goToHome() {
    this.router.navigateByUrl('/henri-potier/all-books');
  }

  goToBasket() {
    if (this.basketService.listBook.length > 0) {
      this.router.navigateByUrl('/henri-potier/books-basket');
    } else {
      this.router.navigateByUrl('/henri-potier/all-books');
    }
  }

  searchBook(value) {
    this.sharedService.search$.emit(value);
  }
}
