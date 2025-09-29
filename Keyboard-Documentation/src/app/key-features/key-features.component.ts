import { Component } from '@angular/core';

@Component({
  selector: 'app-key-features',
  standalone: false,
  templateUrl: './key-features.component.html',
  styleUrl: './key-features.component.css'
})
export class KeyFeaturesComponent {
features = [
  "Customizable RGB Backlighting: Personalize the keyboard's illumination with wide range of colors and lighting effects.",
  "Mechanical Switches: Cherry MX Red switches for a responsive and smooth typing experience",
  "Programmable keys: assign macros and custom functions to any key with the included software",
  "Anti-Ghosting & N-Key Rollover: Ensure accurate ",
  "durability: rated for 50 million keystrokes",
  "Dedicated Media Controls: Conveniently adjust volume, play, pause, and skip tracks without interrupting your workflow or gaming session",
  "Ergonomic Design: Adjustable tilt legs and a detachable wrist rest for comfortable typing over extended periods"
]
}
