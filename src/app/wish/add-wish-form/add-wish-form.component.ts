import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../../shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.scss'
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();

  newWishText = "";

  addNewWish() {
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = "";
  }

}
