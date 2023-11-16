import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderBottomComponent } from './header/header-bottom/header-bottom.component';
import { BooksPageComponent } from './books-page/books-page.component';
import { BooksItemComponent } from './books-page/books-item/books-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FiltersBarComponent } from './header/header-bottom/filters-bar/filters-bar.component';
import { MinCenturyValueDirective, MaxCenturyValueDirective, ClickedOutSideDirective } from './header/header-bottom/filters-bar/directives.directive';
import { FilterPipe } from './header/header-bottom/filters-bar/pipes.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AuthorFormatPipe} from './books-page/books-item/pipes/pipes.pipe';
import { ItemSkeletonComponent } from './books-page/loading-skeleton-item/items-skeleton/items-skeleton.component';
import { HeaderComponent } from './header/header.component';
import { appHeaderTitleDirective } from './header/header-top/directives.directive';
import { PipesModule } from './pipes/pipes.module';
import { AppInitService } from './services/app-init.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    FooterComponent,
    HeaderBottomComponent,
    BooksPageComponent,
    BooksItemComponent,
    FiltersBarComponent,
    MinCenturyValueDirective,
    MaxCenturyValueDirective,
    ClickedOutSideDirective,
    FilterPipe,
    AuthorFormatPipe,
    ItemSkeletonComponent,
    HeaderComponent,
    appHeaderTitleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PipesModule
  ],
  providers: [
    { provide: APP_INITIALIZER, 
      useFactory:(appInitService: AppInitService)=>{
        return ()=>appInitService.init()
      },
      deps: [AppInitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
