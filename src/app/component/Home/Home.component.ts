import {  Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { LoadingService } from '../Shared/assets/loading/loading.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrl: './Home.component.scss'
})
export class HomeComponent {
  constructor(public load:LoadingService){

  }
 navigateToContact(): void {
  // Scroll to the element with the ID 'contactme'
  const contactSection = document.getElementById('contactme');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the element
  }
}
}

