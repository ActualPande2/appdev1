import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: false,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
    private router = inject(Router);
    backgroundImage = './JohtoMap.png';
}
