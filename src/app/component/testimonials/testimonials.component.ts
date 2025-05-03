import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';
import { AppComponent } from '../../app.component';
import { LoadingService } from '../Shared/assets/loading/loading.service';


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit {
  loading = true;
  splide: any;

  constructor(public load: LoadingService) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getSplide();
    }, 3000);

  } 

  getSplide() {
    this.splide = new Splide('.splide', {
      width: '100%',
      type: 'loop',
      padding: '25rem',
      autoplay: true,
      interval: 10000,       // Time interval in milliseconds (3 seconds)
      arrows: false, // Disable left and right arrows
      pagination: false,    // Disable pagination
      speed: 1000,
      gap: '5rem',
      breakpoints: {
        1240: {
          gap: '5rem',
          padding: '15rem',
        },
        820: {
          gap: '5rem',
          padding: '15rem',
        },
        768: {
          gap: '1.5rem',
          padding: '5rem',
        }, 425: {
          gap: '10rem',
          padding: { top: '0rem', bottom: '0rem', left: '2rem', right: '2rem' }
        }, 250: {
          gap: '10rem',
          padding: { top: '0rem', bottom: '0rem', left: '2rem', right: '2rem' }
        }

      }
    },

    );
    this.splide.mount();
  }

}
