import { Component } from '@angular/core';

@Component({
  selector: 'app-whitney',
  standalone: false,
  templateUrl: './whitney.component.html',
  styleUrl: './whitney.component.css'
})
export class WhitneyComponent {
  leader = {
    name: "Whitney",
    type: "Normal",
    badge: "Plain Badge",
    location: "Goldenrod City",
    cssClass: "whitney",
    leaderImg: "./leaders/Whitney_HeartGold_and_SoulSilver.webp",
    gymImg: "./gyms/GoldenrodCityGym.webp",
    badgeImg: "./badges/Plainbadge.webp",
    team: [
      { pokemon: "Clefairy", level: 17, img: "./pokemon/whitney/Clefairy.png" },
      { pokemon: "Miltank", level: 19, img: "./pokemon/whitney/Miltank.png" }
    ]
  }
}
