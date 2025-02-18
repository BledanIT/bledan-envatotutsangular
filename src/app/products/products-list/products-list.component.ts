import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductItem } from '../../../shared/models/productItem';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit{
  products : any[] = [];
  productsJSON! : ProductItem[];

  constructor(private store : ProductsService) { }

  ngOnInit(): void {
    this.store.getAllProductsFromService().subscribe(products => {
      this.products = products;
    });
    this.store.getAllProductsFromJSON().subscribe(
      (products : any) => {
        this.productsJSON = products;
      }, (error : any) => {
        alert(error.message);
      }
    );
    console.log(this.productsJSON);
  }
}
