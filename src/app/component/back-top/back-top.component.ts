import { Component, HostListener } from '@angular/core';
import { LoadingService } from '../Shared/assets/loading/loading.service';

@Component({
  selector: 'app-back-top',
  templateUrl: './back-top.component.html',
  styleUrl: './back-top.component.scss'
})
export class BackTopComponent {
  showBackToTop !: boolean;

  constructor(public load: LoadingService) {

  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const threshold = 80;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > threshold) {
      this.showBackToTop = true;
    } else {
      this.showBackToTop = false;
    }
  }

}
