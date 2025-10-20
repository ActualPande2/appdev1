import { Component, OnInit } from '@angular/core';
import { GrassPokemonService } from '../grass-pokemon-service';

@Component({
  selector: 'app-grass-pokemon',
  standalone: false,
  templateUrl: './grass-pokemon.html',
  styleUrl: './grass-pokemon.css'
})
export class GrassPokemon implements OnInit {
  currentStage = 1;
  pokemon: any;
  
  constructor(private grassPokemonService: GrassPokemonService) {}
  
  ngOnInit() {
    this.pokemon = this.grassPokemonService.getChikorita();
  }
  
  evolve() {
    if (this.currentStage === 1) {
      this.pokemon = this.grassPokemonService.getBayleef();
      this.currentStage = 2;
    } else if (this.currentStage === 2) {
      this.pokemon = this.grassPokemonService.getMeganium();
      this.currentStage = 3;
    } 
  }
  
  revert() {
    if (this.currentStage === 3) {
      this.pokemon = this.grassPokemonService.getBayleef();
      this.currentStage = 2;
    } else if (this.currentStage === 2) {
      this.pokemon = this.grassPokemonService.getChikorita();
      this.currentStage = 1;
    }
  }
}
