import { Component } from '@angular/core';
import { BerriesService} from '../berries-service';
import { PokeballsService} from '../pokeballs-service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-consumables',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './consumables.html',
  styleUrl: './consumables.css'
})
export class Consumables {
  berriesDataSource: { name: string; flavor: string; effect: string;}[] = [];
  pokeballsDataSource: { name: string; type: string; catchRate: string;}[] = [];

  berriesColumns: string[] = ['name', 'flavor', 'effect'];
  pokeballsColumns: string[] = ['name', 'type', 'catchRate'];

  constructor(
    private berriesService: BerriesService,
    private pokeballsService: PokeballsService
  ) {}

  ngOnInit(): void {
    console.log('Consumables ngOnInit called');
    this.berriesDataSource = this.berriesService.getBerries();
    this.pokeballsDataSource = this.pokeballsService.getPokeballs();
  }
}