import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouteInfo, ROUTER_TOKENS } from '../../../app.routes';

@Component({
  selector: 'app-main-layout',
  imports: [HeaderComponent, RouterModule, SidebarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  readonly ROUTER_TOKENS = ROUTER_TOKENS;

  currentItem: RouteInfo | undefined;

  handleEvent(data: string | null) {
    this.currentItem = ROUTER_TOKENS[data!];
  }
}
