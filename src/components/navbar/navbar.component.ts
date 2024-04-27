import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

import { RouterLink, RouterOutlet } from '@angular/router';

import { navLinks } from '../../lib/nav-link';
import { NavLinks } from '../../lib/types';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navbarLinks: NavLinks[] = navLinks;

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Account',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Cart',
            icon: 'pi pi-fw pi-trash',
          },
          {
            separator: true,
          },
          {
            label: 'Logout',
            icon: 'pi pi-fw pi-external-link',
          },
        ],
      },
    ];
  }
}
