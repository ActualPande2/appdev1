import { Component } from '@angular/core';

@Component({
  selector: 'app-pryce',
  standalone: false,
  templateUrl: './pryce.component.html',
  styleUrl: './pryce.component.css'
})
export class PryceComponent {
  leader = {
    name: "Pryce",
    type: "Ice",
    badge: "Icicle Badge",
    location: "Mahogany Town",
    cssClass: "pryce",
    leaderImg: "./leaders/Pryce_HeartGold_and_SoulSilver.webp",
    gymImg: "./gyms/MahoganyTown.webp",
    badgeImg: "./badges/Glacierbadge.webp",
    team: [
      { pokemon: "Seel", level: 30, img: "./pokemon/pryce/Seel.png" },
      { pokemon: "Dewgong", level: 32, img: "./pokemon/pryce/Dewgong.png" },
      { pokemon: "Piloswine", level: 34, img: "./pokemon/pryce/Piloswine.png" }
    ]
  }
}
