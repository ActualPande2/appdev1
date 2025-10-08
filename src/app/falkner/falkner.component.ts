import { Component } from '@angular/core';
import { LeadersService } from '../leaders-service';

@Component({
  selector: 'app-falkner',
  standalone: false,
  templateUrl: './falkner.component.html',
  styleUrl: './falkner.component.css'
})
export class FalknerComponent {
  falkner!: {
    name: string;
    type: string;
    badge: string;
    location: string;
    cssClass: string;
    leaderImg: string;
    gymImg: string;
    badgeImg: string;
    team: { pokemon: string; level: number; img: string }[];
  };
  constructor(private leadersService: LeadersService) {}
  ngOnInit() {
    this.falkner = this.leadersService.getFalkner();
  }
}
