import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private router: Router) { }

  get activeClass() {
    return 'btn btn-primary text-light mw-10';
  }

  get inactiveClass() {
    return 'btn btn-light text-primary mw-10';
  }

  goToLink(where : String) {
    this.router.navigate([where]);
  }
}
