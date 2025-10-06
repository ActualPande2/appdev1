import { Component } from '@angular/core';

@Component({
  selector: 'app-chuck',
  standalone: false,
  templateUrl: './chuck.component.html',
  styleUrl: './chuck.component.css'
})
export class ChuckComponent {
  leader = {
    name: "Chuck",
    type: "Fighting",
    badge: "Storm Badge",
    location: "Cianwood City",
    cssClass: "chuck",
    leaderImg: "./leaders/Chuck_HeartGold_and_SoulSilver.webp",
    gymImg: "./gyms/CianwoodCity.webp",
    badgeImg: "./badges/Stormbadge.webp",
    team: [
      { pokemon: "Primeape", level: 29, img: "./pokemon/chuck/Primeape.png" },
      { pokemon: "Poliwrath", level: 31, img: "./pokemon/chuck/Poliwrath.png" }
    ]
  }
}
