import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  openSection: string | null = 'leaders';

  toggleSection(section: string): void {
    this.openSection = this.openSection === section ? null : section;
  }
}
