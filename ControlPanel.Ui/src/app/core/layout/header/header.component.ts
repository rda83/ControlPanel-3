import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouteInfo } from '../../../app.routes';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() routerTokens: {[key: string]: RouteInfo} | undefined;
  @Output() childEvent = new EventEmitter<string | null>();

  setActiveItem(item: string | null): void {   
    this.childEvent.emit(item);
  }
}
