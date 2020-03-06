import { Component, OnInit } from '@angular/core';
import AcompProjects from './AcompProject';
import OngoingProjects from './OngoingProject';
import * as $ from 'jquery';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  isOngoing = true;
  isAcomplished = false;

  onGoingProj = [];
  acompProj = [];

  constructor() { }

  ngOnInit() {
    this.onGoingProj = [...OngoingProjects];
    this.acompProj = [...AcompProjects];
  }

  open(element: HTMLElement, elem: string) {
    element.scrollIntoView({behavior: 'smooth'});
    if (elem === 'ongoing') {
      if (!this.isOngoing) {
        this.isOngoing = true;
        this.isAcomplished = false;
      }
    } else if (elem === 'acomp') {
      if (!this.isAcomplished) {
        this.isOngoing = false;
        this.isAcomplished = true;
      }
    }
  }

}
