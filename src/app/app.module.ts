import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { GameListComponent } from './game-list/game-list.component';
import { AppListComponent } from './app-list/app-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { searchComponent } from './search/search.component';
import { ToggleButtonComponent } from './toggle-button.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'app', component: AppListComponent },
      { path: 'game', component: GameListComponent },
      { path: 'app/:productId', component: ProductDetailsComponent },
      { path: 'search', component: searchComponent },
    ]),
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    AppListComponent,
    GameListComponent,
    ProductDetailsComponent,
    searchComponent,
    ToggleButtonComponent,
    ProductsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/