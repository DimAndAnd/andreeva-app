import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import * as AOS from 'aos';
import { CertificatesComponent } from '../certificates/certificates.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CertificatesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor() {} 

  ngOnInit(): void {
     AOS.init();
  }

  delocount: number = 0;
  clientcount: number = 0;
  wincount: number = 0;

  delocountstop: any = setInterval(() => {
    this.delocount++;
    if (this.delocount == 185) {
      clearInterval(this.delocountstop)
    }
  }, 10)

  clientcountstop: any = setInterval(() => {
    this.clientcount++;
    if (this.clientcount == 32) {
      clearInterval(this.clientcountstop)
    }
  }, 50)

  wincountstop: any = setInterval(() => {
    this.wincount++;
    if (this.wincount == 128) {
      clearInterval(this.wincountstop)
    }
  }, 20)
}
