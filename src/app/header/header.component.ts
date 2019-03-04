import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
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
  // public classes: String;
  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

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
    // this.classes = document.getElementsByClassName("is-active")[0].className;
  }
  toggleMenu() {
      this.navBurger.nativeElement.classList.toggle('is-active');
      this.navMenu.nativeElement.classList.toggle('is-active');
  }

  clickedBurgerNav() {
    this.navMenu.nativeElement.classList.toggle('is-active');
  }
}
