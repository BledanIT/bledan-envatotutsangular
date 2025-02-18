import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsService } from './products.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  providers: [ProductsService],
  imports: [
    CommonModule, RouterModule, ProductsListComponent
  ],
  exports: [ProductsListComponent]
})
export class ProductsModule { }
