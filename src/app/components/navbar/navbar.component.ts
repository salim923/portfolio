import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isScrolled = false
  isMobileMenuOpen = false

  ngOnInit(): void {}

  @HostListener("window:scroll", [])
  onWindowScroll(): void {
    this.isScrolled = window.pageYOffset > 50
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen
  }

  closeMenu(): void {
    this.isMobileMenuOpen = false
  }
}
