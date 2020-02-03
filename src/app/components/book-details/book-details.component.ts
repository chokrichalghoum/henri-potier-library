import { Component, OnInit } from '@angular/core';
import { DetailsBookService } from '../../commun/services/detailsBook.service';
import { BasketService } from '../../commun/services/basket.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LibelleConstantesService } from '../../commun/services/libellesConstantes.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  constructor(
    public detailsBookService: DetailsBookService,
    public basketService: BasketService,
    private router: Router,
    public libelleConstantesService: LibelleConstantesService,
  ) {}

  ngOnInit() {
    if (this.detailsBookService.book === null || this.detailsBookService.book === undefined) {
      this.router.navigate(['henri-potier/all-books']);
    }
  }
}
