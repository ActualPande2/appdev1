import { Component } from '@angular/core';

@Component({
  selector: 'app-jasmine',
  standalone: false,
  templateUrl: './jasmine.component.html',
  styleUrl: './jasmine.component.css'
})
export class JasmineComponent {
  leader = {
    name: "Jasmine",
    type: "Steel",
    badge: "Mineral Badge",
    location: "Olivine City",
    cssClass: "jasmine",
    leaderImg: "./leaders/Jasmine_HeartGold_and_SoulSilver.webp",
    gymImg: "./gyms/OlivineCity.webp",
    badgeImg: "./badges/Mineralbadge.webp",
    team: [
      { pokemon: "Magnemite", level: 30, img: "./pokemon/jasmine/Magnemite.png" },
      { pokemon: "Magnemite", level: 30, img: "./pokemon/jasmine/Magnemite.png" },
      { pokemon: "Steelix", level: 35, img: "./pokemon/jasmine/Steelix.png" }
    ]
  }
}
