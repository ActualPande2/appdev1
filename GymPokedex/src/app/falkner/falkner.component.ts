import { Component } from '@angular/core';

@Component({
  selector: 'app-falkner',
  standalone: false,
  templateUrl: './falkner.component.html',
  styleUrl: './falkner.component.css'
})
export class FalknerComponent {
    leader = {
    name: 'Falkner',
    type: "Flying",
    badge: "Zephyr Badge",
    location: "Violet City",
    cssClass: "falkner",
    leaderImg: "./leaders/Falkner_HeartGold_and_SoulSilver.webp",
    gymImg: "./gyms/VioletCityGym.webp",
    badgeImg: "./badges/Zephyrbadge.webp",
    team: [
      { pokemon: "Pidgey", level: 9, img: "./pokemon/falkner/0016Pidgey.webp" },
      { pokemon: "Pidgeotto", level: 13, img: "./pokemon/falkner/0017Pidgeotto.webp" }
    ]
  }
}
