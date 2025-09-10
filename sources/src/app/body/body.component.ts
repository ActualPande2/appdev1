import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  //array of colors
  colors: string[] = ['Red','Blue','Yellow','Green','Orange','Purple']
  currentColorIndex: number = 0;
  //fuction to change color of name
  changeNameColor(){
    this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
  }
  //get current color
  get currentColor(): string {
    return this.colors 
    [this.currentColorIndex]
  }

  profile = {
    name: 'Hans Jayden A. Lopez',
    title: 'Proffesional POE Player',
    about: 'Passionate when it comes POE',
    skills: ['ADHD', 'Broken Desk', 'twitch streamer', 'Oil'],
    experience: [
      {
        role: 'Warrior',
        company: 'Meikyuu Black Company',
        period: '2000 - Present',
        description:'UGA BUGA BIG SWORD'},
      {
        role: 'Mage',
        company: 'Meikyuu Black Company',
        period: '2003 - 2020',
        description:'adept in mana handling'
      }
    ],
    education: {
      degree: 'Bachelor of Science in Computer Science',
      school : 'University of Baguio',
      year: '2027',
    },
    contact: {
      emial: 'notActualPande@gmail.com',
      phone: '09083442092',
      location: 'Baguio City, Philippines',
    }
  }
}
