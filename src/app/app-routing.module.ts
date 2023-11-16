import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksPageComponent } from './books-page/books-page.component';
import { HeaderBottomComponent } from './header/header-bottom/header-bottom.component';

const routes: Routes = [
  { path: "", redirectTo: "books", pathMatch: "full" },
  { path: "books",  children:[
    { path: "", component: BooksPageComponent},
    { path: "", component: HeaderBottomComponent, outlet: "bottomHeader"}
  ]},
  { path: 'book/:id', loadChildren: () => import('./book-page/book-page.module').then(m => m.BookPageModule) },
  { path: "**", redirectTo: "books", pathMatch:"full" },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
