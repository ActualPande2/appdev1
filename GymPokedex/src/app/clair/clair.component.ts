import { Component } from '@angular/core';

@Component({
  selector: 'app-clair',
  standalone: false,
  templateUrl: './clair.component.html',
  styleUrl: './clair.component.css'
})
export class ClairComponent {
  leader = {
    name: "Claire",
    type: "Dragon",
    badge: "Rising Badge",
    location: "Blackthorn City",
    cssClass: "claire",
    leaderImg: "./leaders/Clair_HeartGold_and_SoulSilver.webp",
    gymImg: "./gyms/BlackthornCityGym.webp",
    badgeImg: "./badges/Risingbadge.webp",
    team: [
      { pokemon: "Dragonair", level: 38, img: "./pokemon/claire/Dragonair.png" },
      { pokemon: "Dragonair", level: 38, img: "./pokemon/claire/Dragonair.png" },
      { pokemon: "Dragonair", level: 38, img: "./pokemon/claire/Dragonair.png" },
      { pokemon: "Kingdra", level: 41, img: "./pokemon/claire/Kingdra.png" }
    ]
  }
}
