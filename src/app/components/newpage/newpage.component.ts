import { Component, HostListener, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.scss']
})
export class NewpageComponent implements OnInit {
  fixednavbar: boolean = false;
  date: Date = new Date();
  @HostListener('window:scroll', ['$event'])
  onscroll() {
    if (window.scrollY > 150) {
      this.fixednavbar = true;
    }
    else {
      this.fixednavbar = false;
    }
  }
  constructor() { }

  ngOnInit(): void { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  voyageOptions: OwlOptions = {
    loop: true,
    dots: false,
    mouseDrag: true,
    touchDrag: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
