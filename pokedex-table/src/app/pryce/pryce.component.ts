import { Component } from '@angular/core';
import { LeadersService } from '../leaders-service';

@Component({
  selector: 'app-pryce',
  standalone: false,
  templateUrl: './pryce.component.html',
  styleUrl: './pryce.component.css'
})
export class PryceComponent {
  pryce!: {
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
    this.pryce = this.leadersService.getPryce();
  }
}
