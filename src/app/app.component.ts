import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading = true;
  title = 'AIR Lab | Vellore Institute Of Technology, Amaravati, A.P.';
  isNavOpened = false;
  sideNavClass = 'sidenav';
  mainWrapClass = 'main-wrapper';
  buttonState = 'Open';
  menuName = 'menu';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((currState) => {
      if (currState instanceof NavigationStart) {
        this.isLoading = true;
      } else if (currState instanceof NavigationEnd) {
        this.isLoading = false;
      }
    });
  }


  toggleNav() {
    if (this.isNavOpened) {
      this.isNavOpened = false;
      this.sideNavClass = 'sidenav';
      this.mainWrapClass = 'main-wrapper';
      this.buttonState = 'Open';
      this.menuName = 'menu';
    } else {
      this.isNavOpened = true;
      this.sideNavClass = 'sidenav active-sidenav';
      this.mainWrapClass = 'main-wrapper main-active';
      this.buttonState = 'Close';
      this.menuName = 'close';
    }
  }
}
