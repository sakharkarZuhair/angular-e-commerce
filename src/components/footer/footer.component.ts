import { Component } from '@angular/core';
import { navLinks } from '../../lib/nav-link';
import { NavLinks } from '../../lib/types';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],

  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  navbarLinks: NavLinks[] = navLinks;
}
