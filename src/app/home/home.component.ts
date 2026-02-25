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
}
