import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-showmore',
  imports: [],
  templateUrl: './showmore.component.html',
  styleUrl: './showmore.component.css'
})
export class ShowmoreComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    AOS.init();
  }

  delocount: number = 0;
  clientcount: number = 0;
  wincount: number = 0;

  delocountstop: any = setInterval(() => {
    this.delocount++;
    if (this.delocount == 500) {
      clearInterval(this.delocountstop)
    }
  }, 10)

  clientcountstop: any = setInterval(() => {
    this.clientcount++;
    if (this.clientcount == 700) {
      clearInterval(this.clientcountstop)
    }
  }, 10)

  wincountstop: any = setInterval(() => {
    this.wincount++;
    if (this.wincount == 1000) {
      clearInterval(this.wincountstop)
    }
  }, 10)
}
