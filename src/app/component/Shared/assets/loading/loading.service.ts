import { Injectable, Input, input } from '@angular/core';
import { TestimonialsComponent } from '../../../testimonials/testimonials.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  @Input()loading = true;
  constructor() {
    this.loadPlaceHolders()
  }
  
  loadPlaceHolders = () => {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
