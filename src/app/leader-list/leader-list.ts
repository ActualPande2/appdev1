import { Component } from '@angular/core';
import { LeadersService } from '../leaders-service';

@Component({
  selector: 'app-leader-list',
  standalone: false,
  templateUrl: './leader-list.html',
  styleUrl: './leader-list.css'
})
export class LeaderList {
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
  }
  morty!: {
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
  clair!: {
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
    this.whitney = this.leaders.getWhitney();
    this.morty = this.leaders.getMorty();
    this.chuck = this.leaders.getChuck();
    this.jasmine = this.leaders.getJasmine();
    this.pryce = this.leaders.getPryce();
    this.clair = this.leaders.getClair();
  }
}
