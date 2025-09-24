import { Component } from '@angular/core';

@Component({
  selector: 'app-taoteching',
  standalone: false,
  templateUrl: './taoteching.component.html',
  styleUrl: './taoteching.component.css'
})
export class TaotechingComponent {
LaoTzu = [
    {
      quote: 'Quote 1',
      body: '知己知彼，百战不殆',
      translation: 'Know yourself, know your enemy, and you will never be defeated in a hundred battles'
    },
    {
      quote: 'Quote 2',
      body: '自然不速，万物不成',
      translation: 'Nature does not hurry, yet everything is accomplished'
    },
    {
      quote: 'Quote 3',
      body: '大道无形，生育天地',
      translation: 'The Great Tao is without form, it gives birth to heaven and earth'
    },
    {
      quote: 'Quote 4',
      body: '知者不言，言者不知',
      translation: 'He who knows does not speak; he who speaks does not know'
    },
    {
      quote: 'Quote 5',
      body: '天下难事，必作于易',
      translation: 'The difficult things in the world must be done through what is easy'
    }
  ]

  currentIndex: number = 0;
  currentQuote = this.LaoTzu[0];

  increment() {
    if (this.currentIndex < this.LaoTzu.length - 1) {
      this.currentIndex++;
      this.currentQuote = this.LaoTzu[this.currentIndex];
    }
    else if(this.currentIndex == this.LaoTzu.length - 1){
      this.currentIndex = 0;
      this.currentQuote = this.LaoTzu[this.currentIndex];
    }

  }

  decrement() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentQuote = this.LaoTzu[this.currentIndex];
    }
    if(this.currentIndex == 0){
      this.currentIndex = this.LaoTzu.length - 1;
      this.currentQuote = this.LaoTzu[this.currentIndex];
    }
  }
}
