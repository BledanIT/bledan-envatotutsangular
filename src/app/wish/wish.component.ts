import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from '../../shared/models/wishItem';
import { EventService } from '../../shared/services/EventService';
import { WishService } from './wish.service';
import { WishModule } from './wish.module';

@Component({
  selector: 'app-wish',
  imports: [CommonModule, WishModule],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.scss'
})
export class WishComponent implements OnInit {
  items! : WishItem[];
  /*items : WishItem[] = [
    new WishItem("To Learn Angular", false),
    new WishItem("Get coffee", true),
    new WishItem("Find grass that cuts itself", false)
  ];*/

  constructor(events : EventService, private wishService : WishService) {
    events.listen('removeWish', (wish) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    })
  }

  ngOnInit() : void {
    this.wishService.getWishes().subscribe(
      (data : any) => {
        this.items = data;
      },
      (error: any) => {
        alert(error.message);
      }
    );
    console.log(this.items);
  }

  filter : any;
}
