import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeadersService {
   constructor() { }

  getFalkner(){
    return {
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

  getBugsy(){
    return {
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

  getWhitney(){
    return {
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

  getMorty(){
    return {
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

  getChuck(){
    return {
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

  getJasmine(){
    return {
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

  getPryce(){
    return {
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

  getClair(){
    return {
      name: "Clair",
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
}
