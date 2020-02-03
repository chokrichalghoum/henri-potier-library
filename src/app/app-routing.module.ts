import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookBasketComponent } from './components/book-basket/book-basket.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';


const routes: Routes = [
{
  path: 'henri-potier',
  children: [
    {path: 'all-books' , component: AllBooksComponent } , 
    {path: 'all-books/:details' , component: BookDetailsComponent } , 
    {path: 'books-basket' , component: BookBasketComponent },
    {path: '' , component: AllBooksComponent }
  ]
},
{path: '', pathMatch: 'full', redirectTo: 'henri-potier/all-books'},
{path: '**', pathMatch: 'full', redirectTo: 'henri-potier/all-books'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
