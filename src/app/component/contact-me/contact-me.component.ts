import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { LoadingService } from '../Shared/assets/loading/loading.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  loading =true;
  details =false;
  constructor(public load:LoadingService){

  }

 showdetails(){
  this.details = !this.details;
 }
}
