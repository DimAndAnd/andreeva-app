import { Component, HostListener } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, RouterOutlet, NavComponent, HomeComponent, CertificatesComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'andreeva-app';
  isMenuScrolled = false;

  @HostListener('window:scroll', ['$event'])
  scrollCheck() {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 180) {
      this.isMenuScrolled = true;
    }
    else
      this.isMenuScrolled = false;

  }

  scrollToTop() {
    document.body.scrollIntoView({ behavior: 'smooth' })
  }

}
