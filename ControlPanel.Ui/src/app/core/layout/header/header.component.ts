import { Component } from '@angular/core';
import { ROUTER_TOKENS } from '../../../app.routes';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isMenuOpen = false;
  activeMainItem: string | null = null;

  readonly ROUTER_TOKENS = ROUTER_TOKENS;

  constructor(){}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActiveItem(item: string | null): void {
    this.activeMainItem = item;
  }
}
