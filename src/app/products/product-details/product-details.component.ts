import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { ProductsListComponent } from '../products-list/products-list.component';
import { ProductItem } from '../../../shared/models/productItem';
import { filter, of } from 'rxjs';

@Component({
  selector: 'app-product-details',
  providers: [ProductsListComponent],
  imports: [RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  product : any = {};
  productJSON : any= {};
  constructor (private store : ProductsService, private route: ActivatedRoute, private list : ProductsListComponent) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let id = params.get('id');
      if(id) {
        this.store.getProductFromService(parseInt(id, 10)).subscribe(product => this.product = product);
        this.productJSON = this.store.getAllProductsFromJSON().subscribe((arr : any) => this.productJSON = arr.find((prod : any) => prod.id === parseInt(id, 10)));
      }
    });
  }
}
