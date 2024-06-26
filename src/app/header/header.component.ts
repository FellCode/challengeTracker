import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  items: Array<MenuItem> = [{
    label: "Dashboard",
    routerLink: "/dashboard"
    },
  {
    label: "Games",
    routerLink: "/games"
  },
  {
    label: "Settings",
    routerLink: "/settings"
  }]

}
