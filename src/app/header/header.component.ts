import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  title = 'LCA Apartments';
  public items: MenuItem[];

  constructor() { }
  
  ngOnInit() {
    this.items = [
      { label: 'Home', icon: '', routerLink: "/" },
      // { label: 'Blackstone', icon: '', routerLink: "blackstone" },
      { label: 'Princeton', icon: '', routerLink: "/princeton" },
      // { label: 'Rental Homes', icon: '', routerLink: "/homes" },
      { label: 'Maintenance', icon: '', routerLink: "/maintenance" },
      { label: 'Contact', icon: '', routerLink: "/contacts" }
    ];
  }

}
