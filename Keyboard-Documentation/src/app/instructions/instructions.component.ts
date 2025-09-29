import { Component } from '@angular/core';

@Component({
  selector: 'app-instructions',
  standalone: false,
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.css'
})
export class InstructionsComponent {
  instructions = {
    'unboxing': 'Carefully remove the keyboard and accessories from the packaging. Inspect for any visible damage and ensure all items are present.',
    'connecting': 'Plug the keyboard into your computer using the provided USB cable or connect via Bluetooth if supported. Wait for your system to recognize the device.',
    'softwareInstallation': 'Download and install the official keyboard software from the manufacturer’s website. Follow the on-screen instructions to complete setup.',
    'keycapRemoval': 'Use the included keycap puller to gently remove keycaps. Align replacement keycaps and press firmly until secure.'
  }
}
