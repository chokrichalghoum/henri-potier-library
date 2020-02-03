import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../commun/services/basket.service';
import { Router } from '@angular/router';
import { LibelleConstantesService } from '../../commun/services/libellesConstantes.service';

@Component({
  selector: 'app-book-basket',
  templateUrl: './book-basket.component.html',
  styleUrls: ['./book-basket.component.css'],
})
export class BookBasketComponent implements OnInit {
  constructor(public basketService: BasketService, private router: Router, public libelleConstantesService: LibelleConstantesService) {}

  ngOnInit() {
    if (this.basketService.listBook.length < 1) {
      this.router.navigate(['henri-potier/all-books']);
    }
  }

  goToHome() {
    this.router.navigateByUrl('/henri-potier/all-books');
  }
}
