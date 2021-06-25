import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  mobileMenuOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

}
