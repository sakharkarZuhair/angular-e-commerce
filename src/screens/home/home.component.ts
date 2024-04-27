import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/home/hero-section/hero-section.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
