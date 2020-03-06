import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  isGuest = true;
  isTech = false;
  isHiring = false;

  constructor() {}

  ngOnInit() {}

  handleClick(buttonName) {
    switch (buttonName) {
      case 'guest':
        this.handleGuest();
        break;
      case 'tech':
        this.handleTech();
        break;
      case 'hire':
        this.handleHire();
        break;
    }
  }

  handleGuest() {
    if (!this.isGuest) {
      this.isGuest = true;
      this.isHiring = false;
      this.isTech = false;
      $('#guestButton').addClass('active');
      $('#techButton').removeClass('active');
      $('#hiringButton').removeClass('active');
    }
  }

  handleTech() {
    this.isGuest = false;
    this.isHiring = false;
    this.isTech = true;
    $('#guestButton').removeClass('active');
    $('#techButton').addClass('active');
    $('#hiringButton').removeClass('active');
  }

  handleHire() {
    this.isGuest = false;
    this.isHiring = true;
    this.isTech = false;
    $('#guestButton').removeClass('active');
    $('#techButton').removeClass('active');
    $('#hiringButton').addClass('active');
  }
}
