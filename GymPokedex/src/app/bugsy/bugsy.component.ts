import { Component } from '@angular/core';

@Component({
  selector: 'app-bugsy',
  standalone: false,
  templateUrl: './bugsy.component.html',
  styleUrl: './bugsy.component.css'
})
export class BugsyComponent {
  leader = {
    name: "Bugsy",
    type: "Bug",
    badge: "Hive Badge",
    location: "Azalea Town",
    cssClass: "bugsy",
    leaderImg: "./leaders/Bugsy_HeartGold_and_SoulSilver.webp",
    gymImg: "./gyms/AzaleaTownGym.webp",
    badgeImg: "./badges/Hivebadge.webp",
    team: [
      { pokemon: "Metapod", level: 15, img: "./pokemon/bugsy/Metapod.png" },
      { pokemon: "Kakuna", level: 15, img: "./pokemon/bugsy/Kakuna.png" },
      { pokemon: "Scyther", level: 17, img: "./pokemon/bugsy/Scyther.png" }
    ]
  }
}
