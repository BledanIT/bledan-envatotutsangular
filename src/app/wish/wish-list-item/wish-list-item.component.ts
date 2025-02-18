import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../../shared/services/EventService';
import { WishItem } from '../../../shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.scss'
})
export class WishListItemComponent {
  @Input() wish! : WishItem;

  constructor(private events : EventService) {}

  get cssClasses() {
    return { 'strikeout text-muted': this.wish.isComplete };
  }

  toggleFulfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }
}
