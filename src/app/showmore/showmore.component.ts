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
}
