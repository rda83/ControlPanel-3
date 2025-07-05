import { Component, computed } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { RouteInfo, ROUTER_TOKENS } from '../../../app.routes';
import { ClarityModule } from '@clr/angular';
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, RouterLink, RouterModule, ClarityModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

  readonly ROUTER_TOKENS = ROUTER_TOKENS;

  currentItem: RouteInfo | undefined;

  user = computed(() => this.authService.state().user);
  isAuthenticated = computed(() => this.authService.state().isAuthenticated);

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  setActiveItem(item: string | null): void { 
    this.currentItem = ROUTER_TOKENS[item!]
  }
}

// TODO:
//  1. Подсвечивать активные элементы меню (верхнее и боковое)
//  2. Раздел логина
//  3. Тип системы, текущая система - в заголовке 