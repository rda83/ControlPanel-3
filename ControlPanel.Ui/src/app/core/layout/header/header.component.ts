import { Component, computed, EventEmitter, Input, Output } from '@angular/core';
import { RouteInfo } from '../../../app.routes';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() routerTokens: {[key: string]: RouteInfo} | undefined;
  @Output() childEvent = new EventEmitter<string | null>();

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
    this.childEvent.emit(item);
  }
}
