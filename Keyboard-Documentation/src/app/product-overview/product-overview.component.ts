import { Component } from '@angular/core';

@Component({
  selector: 'app-product-overview',
  standalone: false,
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.css'
})
export class ProductOverviewComponent {
  model = "KB-XB1000"
  overview = "The KB-XB1000 is a high-performance mechanical keyboard designed for both gaming and professional use."
}
