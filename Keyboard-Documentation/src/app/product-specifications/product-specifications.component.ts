import { Component } from '@angular/core';

@Component({
  selector: 'app-product-specifications',
  standalone: false,
  templateUrl: './product-specifications.component.html',
  styleUrl: './product-specifications.component.css'
})
export class ProductSpecificationsComponent {
switchType= "Cherry MX Red (Mechanical)"
keyLayout= "Full-size (104 keys)"
backlighting= "RGB with customizable colors"
connectivity= "Wired (USB 2.0)"
dimensions= "440mm x 135mm x 35mm"
weight= "1.2 kilograms"
cableLength= "1.8 meters"
additionalFeatures= [
  "Anti-Ghosting", 
  "N-key rollover", 
  "dedicated media controls"
];
inTheBox = [
  "KB-X1000 Keyboard",
  "USB Cable",
  "User Manual",
  "Keycap Removal Tool",
  "Warranty Card"
] 
}
