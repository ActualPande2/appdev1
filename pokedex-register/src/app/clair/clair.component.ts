import { Component } from '@angular/core';
import { LeadersService } from '../leaders-service';

@Component({
  selector: 'app-clair',
  standalone: false,
  templateUrl: './clair.component.html',
  styleUrl: './clair.component.css'
})
export class ClairComponent {
  claire!: {
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
    this.claire = this.leadersService.getClair();
  }
}
