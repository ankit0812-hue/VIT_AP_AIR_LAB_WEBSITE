import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface, SwiperComponent } from 'ngx-swiper-wrapper';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  swiperConfigHorizontal: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 3
  };

  swiperConfigVertical: SwiperConfigInterface = {
    direction: 'vertical',
    slidesPerView: 5
  };
  year = new Date().getFullYear();

  achievements = [
    {
      id: 1001,
      heading: 'Hello World',
      imgUrl: './assets/images/back_1.png',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, error dolor'
    },
    {
      id: 1002,
      heading: 'Hello World',
      imgUrl: './assets/images/back_1.png',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, error dolor'
    },
    {
      id: 1003,
      heading: 'Hello World',
      imgUrl: './assets/images/back_1.png',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, error dolor'
    },
    {
      id: 1004,
      heading: 'Hello World',
      imgUrl: './assets/images/back_1.png',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, error dolor'
    },
    {
      id: 1005,
      heading: 'Hello World',
      imgUrl: './assets/images/back_1.png',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, error dolor'
    },
    {
      id: 1006,
      heading: 'Hello World',
      imgUrl: './assets/images/back_1.png',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, error dolor'
    },
    {
      id: 1007,
      heading: 'Hello World',
      imgUrl: './assets/images/back_1.png',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, error dolor'
    }
  ];


  scrollIndex: any = 0;

  constructor(private breakPointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakPointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe((state: BreakpointState) => {
      if (state.matches) {
        if (state.breakpoints[Breakpoints.XSmall]) {
          this.swiperConfigHorizontal.slidesPerView = 1;
        } else {
          this.swiperConfigHorizontal.slidesPerView = 2;
        }
      } else {
        this.swiperConfigHorizontal.slidesPerView = 3;
      }
    });

    this.doInitCounter();
  }

  updatesScroll(direction: string) {
    const updateArea = document.getElementById('update');
    if (direction === 'u') {
      updateArea.scrollBy({ top: -120, behavior: 'smooth' });
    } else {
      updateArea.scrollBy({ top: 120, behavior: 'smooth' });
    }
  }

  getStarted(element: HTMLElement) {
    element.scrollIntoView({behavior: 'smooth'});
  }

  doInitCounter() {
    let a = 0;
    $(window).scroll(() => {
      const oTop = $('#counter').offset().top - window.innerHeight;
      if (a === 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
            const $this = $(this);
            const countTo = $this.attr('data-count');
            $({
          countNum: $this.text()
          }).animate({
          countNum: countTo
          },

          {

          duration: 2000,
          easing: 'swing',
          step: function() {
          $this.text(Math.floor(this.countNum));
          },
          complete: function() {
          $this.text(this.countNum);
          }

          });
        });
        a = 1;
      }

    });
  }
}
