import { Component } from '@angular/core';
import { LeadersService } from '../leaders-service';

@Component({
  selector: 'app-chuck',
  standalone: false,
  templateUrl: './chuck.component.html',
  styleUrl: './chuck.component.css'
})
export class ChuckComponent {
  chuck!: {
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
    this.chuck = this.leaders.getChuck();
  }
}
