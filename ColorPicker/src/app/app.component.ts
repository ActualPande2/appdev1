import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  colors = [
    "#FF5377", "#33FF57", "#3357FF", "#F3FF33", "#FF33F5", "#33FFF5", "#FFA500", "#800080", "#00FFFF", "#FFD700", 
    "#008000", "#DC143C", "#A52A2A", "#4B0082", "#00FF00", "#FF4500", "#1E90FF", "#FF1493", "#B22222", "#7FFF00", 
    "#8A2BE2", "#00CED1", "#FF6347", "#4682B4", "#ADFF2F"  
  ]
  currentColorIndex = signal(0);
  currentColor = signal(this.colors[0])

  changeColor() {
  const nextIndex = (this.currentColorIndex() + 1) % 
  this.colors.length;
  this.currentColorIndex.set(nextIndex);
  this.currentColor.set(this.colors[nextIndex]);
  }
}

