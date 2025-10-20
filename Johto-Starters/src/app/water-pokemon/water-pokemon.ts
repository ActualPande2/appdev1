import { Component, OnInit } from '@angular/core';
import { WaterPokemonService } from '../water-pokemon-service';


@Component({
  selector: 'app-water-pokemon',
  standalone: false,
  templateUrl: './water-pokemon.html',
  styleUrl: './water-pokemon.css'
})
export class WaterPokemon implements OnInit {
  currentStage = 1;
  pokemon: any;

  constructor(private waterPokemonService: WaterPokemonService) {}

  ngOnInit() {
    this.pokemon = this.waterPokemonService.getTotodile();
  }

  evolve() {
    if (this.currentStage === 1) {
      this.pokemon = this.waterPokemonService.getCroconaw();
      this.currentStage = 2;
    } else if (this.currentStage === 2) {
      this.pokemon = this.waterPokemonService.getFeraligatr();
      this.currentStage = 3;
    } 
  }
  
  revert() {
    if (this.currentStage === 3) {
      this.pokemon = this.waterPokemonService.getCroconaw();
      this.currentStage = 2;
    } else if (this.currentStage === 2) {
      this.pokemon = this.waterPokemonService.getTotodile();
      this.currentStage = 1;
    }
  }
}
