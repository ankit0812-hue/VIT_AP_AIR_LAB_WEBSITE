import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
})
export class PublicationsComponent implements OnInit {

  isSearchOpen = false;

  constructor() { }

  ngOnInit() {
  }

  handleSearch() {
    if (this.isSearchOpen) {
      this.isSearchOpen = false;
      $('#search').removeClass('open-search');
    } else {
      this.isSearchOpen = true;
      $('#search').addClass('open-search');
    }
  }
}
