import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactModule } from './contact/contact.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WishModule } from './wish/wish.module';
import { ProductsModule } from './products/products.module';

@Component({
  selector: 'app-root',
  imports: [CommonModule, WishModule, ContactModule, RouterModule, NotFoundComponent, NavbarComponent, HomeComponent, ProductsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  
}

