import { Component } from '@angular/core';
import { LeadersService } from '../leaders-service';

@Component({
  selector: 'app-jasmine',
  standalone: false,
  templateUrl: './jasmine.component.html',
  styleUrl: './jasmine.component.css'
})
export class JasmineComponent {
  jasmine!: {
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
    this.jasmine = this.leaders.getJasmine();
  }
}