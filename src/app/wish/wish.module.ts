import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { WishService } from './wish.service';
import { WishComponent } from './wish.component';


@NgModule({
  declarations: [],
  providers: [WishService],
  imports: [
    CommonModule, FormsModule, HttpClientModule, WishListComponent, AddWishFormComponent, WishFilterComponent, WishListItemComponent, WishComponent
  ],
  exports: [WishListComponent, AddWishFormComponent, WishFilterComponent, WishListItemComponent, WishComponent]
})
export class WishModule { }
