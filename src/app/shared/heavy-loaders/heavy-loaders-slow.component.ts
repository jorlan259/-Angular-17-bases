import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="h-56 flex items-center justify-center bg-blue-600 p-5">
    Heavy Loaders Slow    
  </div>
  `
})
export class HeavyLoadersSlowComponent {
  constructor() {
    const start = Date.now();
    while (Date.now() - start < 5000) {
    }
    console.log('Heavy Loaders Slow');
  }
}
