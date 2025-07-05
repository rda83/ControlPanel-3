import { Component, Input } from '@angular/core';
import { RouteInfo } from '../../../app.routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ClarityModule } from '@clr/angular'

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, ClarityModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() currentItem: RouteInfo | undefined;
}
