import { Component } from '@angular/core';

@Component({
  selector: 'app-morty',
  standalone: false,
  templateUrl: './morty.component.html',
  styleUrl: './morty.component.css'
})
export class MortyComponent {
  leader = {
    name: "Morty",
    type: "Ghost",
    badge: "Fog Badge",
    location: "Ecruteak City",
    cssClass: "morty",
    leaderImg: "./leaders/HGSS_Morty.webp",
    gymImg: "./gyms/EcruteakCity.webp",
    badgeImg: "./badges/Fogbadge.webp",
    team: [
      { pokemon: "Ghastly", level: 21, img: "./pokemon/morty/Gastly.png" },
      { pokemon: "Haunter", level: 21, img: "./pokemon/morty/Haunter.png" },
      { pokemon: "Haunter", level: 23, img: "./pokemon/morty/Haunter.png" },
      { pokemon: "Gengar", level: 25, img: "./pokemon/morty/Gengar.png" }
    ]
  }
}
