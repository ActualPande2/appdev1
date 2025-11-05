import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-food-list',
  imports: [CommonModule],
  templateUrl: './food-list.html',
  styleUrl: './food-list.css',
})
export class FoodList {
  food1: any;
  food2: any;
  food3: any;
  food4: any;
  food5: any;
  food6: any;
  food7: any;
  food8: any;
  food9: any;
  food10: any;

  constructor (private http: HttpClient){
    this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?s=kentucky fried chicken').subscribe(
      response => {
        this.food1 = response;
      },
      error => {
        console.error('Error: ', error);
      }
    )

    this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Japanese Katsudon').subscribe(
      response => {
        this.food2 = response;
      },
      error => {
        console.error('Error: ', error);
      }
    )
    
    this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken Karaage').subscribe(
      response => {
        this.food3 = response;
      },
      error => {
        console.error('Error: ', error);
      }
    )

    this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Tonkatsu pork').subscribe(
      response => {
        this.food4 = response;
      },
      error => {
        console.error('Error: ', error);
      }
    )

    this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Bread omelette').subscribe(
      response => {
        this.food5 = response;
      },
      error => {
        console.error('Error: ', error);
      }
    )

    this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Spiced smoky barbecued chicken').subscribe(
      response => {
        this.food6 = response;
      },
      error => {
        console.error('Error: ', error);
      }
    )

    this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?s=BBQ Pork Sloppy Joes').subscribe(
      response => {
        this.food7 = response;
      },
      error => {
        console.error('Error: ', error);
      }
    )

    this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Three-cheese souffles').subscribe(
      response => {
        this.food8 = response;
      },
      error => {
        console.error('Error: ', error);
      }
    )

    this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Krispy Kreme Donut').subscribe(
      response => {
        this.food9 = response;
      },
      error => {
        console.error('Error: ', error);
      }
    )

    this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Pancakes').subscribe(
      response => {
        this.food10 = response;
      },
      error => {
        console.error('Error: ', error);
      }
    )
  }
}
