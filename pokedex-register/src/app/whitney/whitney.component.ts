import { Component } from '@angular/core';
import { LeadersService } from '../leaders-service';

@Component({
  selector: 'app-whitney',
  standalone: false,
  templateUrl: './whitney.component.html',
  styleUrl: './whitney.component.css'
})
export class WhitneyComponent {
  whitney!: {
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
    this.whitney = this.leadersService.getWhitney();
  }
}
