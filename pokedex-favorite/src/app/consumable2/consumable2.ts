import { Component } from '@angular/core';
import { PokeballsService} from '../pokeballs-service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-consumable2',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './consumable2.html',
  styleUrl: './consumable2.css'
})
export class Consumable2 {
  pokeballsDataSource: { name: string; type: string; catchRate: string;}[] = [];

  pokeballsColumns: string[] = ['name', 'type', 'catchRate'];

  constructor(
    private pokeballsService: PokeballsService
  ) {}

    ngOnInit(): void {
    console.log('Consumables ngOnInit called');
    this.pokeballsDataSource = this.pokeballsService.getPokeballs();
  }
}
