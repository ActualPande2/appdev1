import { Component, OnInit } from '@angular/core';
import { FirePokemonService } from '../fire-pokemon-service';

@Component({
  selector: 'app-fire-pokemon',
  standalone: false,
  templateUrl: './fire-pokemon.html',
  styleUrl: './fire-pokemon.css'
})
export class FirePokemon implements OnInit {
    currentStage = 1;
    pokemon: any;
  
    constructor(private firePokemonService: FirePokemonService) {}
  
    ngOnInit() {
      this.pokemon = this.firePokemonService.getCyndaquil();
    }
  
    evolve() {
      if (this.currentStage === 1) {
        this.pokemon = this.firePokemonService.getQuilava();
        this.currentStage = 2;
      } else if (this.currentStage === 2) {
        this.pokemon = this.firePokemonService.getTyphlosion();
        this.currentStage = 3;
      } 
    }
    
    revert() {
      if (this.currentStage === 3) {
        this.pokemon = this.firePokemonService.getQuilava();
        this.currentStage = 2;
      } else if (this.currentStage === 2) {
        this.pokemon = this.firePokemonService.getCyndaquil();
        this.currentStage = 1;
      }
    }
}
