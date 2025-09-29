import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: false,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
private router = inject(Router);

  navigateHome() {
    this.router.navigate(['/']);
  }
}
