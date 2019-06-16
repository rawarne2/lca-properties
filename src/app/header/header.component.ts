import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private router: Router) { }
  
  ngOnInit() {

  }
  toggleMenu() {
      this.navBurger.nativeElement.classList.toggle('is-active');
      this.navMenu.nativeElement.classList.toggle('is-active');
  }

  clickedBurgerNav() {
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  currentTab(tab) {
    return this.router.url.toString() === tab
  }
}
