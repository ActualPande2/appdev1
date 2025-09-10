import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  profile = {
    name: 'Hans Jayden A. Lopez',
    address: '#228 L.Ceniza Rd. Victoria Village',
    about: 'Passionate when it comes Programming Video Games. I love to play video games and watch anime during my free time.',
    skills: ['Java', 'C#', 'Good Communicator', 'Game Development', 'Web Development'],
    experience: [
      {
        role: 'OJT Intern',
        company: 'Helix Solutions IT',
        location: 'Athena Towers III',
        period: '2023 - 2024',
        description:'Worked on chat bots and web development for clients'
      },
    ],
    awards:[
      {
        title: 'With Honors',
        issuer: 'University of Baguio',
        year: '2023 - 2024',
        description: 'Academic Excellence'
      },
      {
        title: 'Spelling Bee 3rd Place',
        issuer: 'University of Baguio',
        year: '2022',
        description: '3rd Place in Spelling Bee Competition'
      },
      {
        title: '1st place Pc Assembly',
        issuer: 'University of Baguio',
        year: '2024',
        description: '1st Place in PC Assembly Competition'
      }
    ],
    education: {
      degree: 'Bachelor of Science in Computer Science',
      school : 'University of Baguio, Baguio City',
      year: '2022 - Present',
    },
    courses: [
      {
        code: 'GETHCS1',
        name: 'Ethics',
        teacher: 'Aira Jessa Palisoc'
      },
      {
        code: 'DSALG01',
        name: 'Data Structures and Algorithm',
        teacher: 'Cherrie Almazan'
      },
      {
        code: 'MDBSE1',
        name: 'Information Management and Database Systems',
        teacher: 'Divine Aguilar-Agudong'
      },
      {
        code: 'APPDEV1',
        name: 'Introduction to Applications Development',
        teacher: 'Jeremy Moses Ebreo'
      },
      {
        code: 'PROG1T2',
        name: 'Object-Oriented Programming',
        teacher: 'Meynard Soriano'
      },
      {
        code: 'DITRUC2',
        name: 'Discrete Structures 2',
        teacher: 'Jeremy Moses Ebreo'
      },
      {
        code: 'ITMGMT1',
        name: 'Project Management',
        teacher: 'Hydi Toyeng'
      },
      {
        code: 'PATTF01',
        name: 'Bowling',
        teacher: 'Lorie Adadad'
      }
    ],
    contact: {
      emial: '20124537@s.ubaguio.edu',
      phone: '09083442092',
      location: 'Baguio City, Philippines',
    }
  }
}
