import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from '../../../shared/models/wishItem';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';

@Component({
  selector: 'wish-list',
  imports: [CommonModule, WishListItemComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent {
  @Input() wishes : WishItem[] = [];

  
}
