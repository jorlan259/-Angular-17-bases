import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'shared-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.scss'
})
export class SidemenuComponent {
  public menuItems = routes
    .map(route => route.children ?? [])
    .flat()// si es un arregle bidimensional lo convierte en un arreglo
    .filter(route => route && route.path)
    .filter(route => !route.path?.includes(':'));

  constructor() {
  }
}
