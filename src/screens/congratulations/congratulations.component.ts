import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-congratulations',
  standalone: true,
  imports: [],
  templateUrl: './congratulations.component.html',
  styleUrl: './congratulations.component.css',
})
export class CongratulationsComponent implements OnInit {
  name: string = '';
  address: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    let storageName = localStorage.getItem('firstName');
    let storageAddress = localStorage.getItem('address');

    if (storageName && storageAddress) {
      this.name = storageName;
      this.address = storageAddress;
    }

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
  }
}
