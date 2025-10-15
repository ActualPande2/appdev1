import { Component } from '@angular/core';
import { BerriesService} from '../berries-service';
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

  berriesColumns: string[] = ['name', 'flavor', 'effect'];

  constructor(
    private berriesService: BerriesService
  ) {}

  ngOnInit(): void {
    console.log('Consumables ngOnInit called');
    this.berriesDataSource = this.berriesService.getBerries();
  }
}