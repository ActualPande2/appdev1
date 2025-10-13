import { Component } from '@angular/core';
import { LeadersService } from '../leaders-service';

@Component({
  selector: 'app-bugsy',
  standalone: false,
  templateUrl: './bugsy.component.html',
  styleUrl: './bugsy.component.css'
})
export class BugsyComponent {
  bugsy!: {
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

  constructor(private leaders: LeadersService) {}

  ngOnInit(): void {
    this.bugsy = this.leaders.getBugsy();
  }
}
