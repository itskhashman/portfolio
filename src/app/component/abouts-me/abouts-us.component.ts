import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AppComponent } from '../../app.component';
import { skills } from '../Shared/assets/service';
import { LoadingService } from '../Shared/assets/loading/loading.service';

@Component({
  selector: 'app-abouts-me',
  templateUrl: './abouts-me.component.html',
  styleUrl: './abouts-me.component.scss'
})
export class AboutmeComponent {
  loading =true;

  myskills: skills[] = [{
    name: "HTML-5",
    score: "30%",
  }, {
    name: "Angular-Rxjs",
    score: "50%",
  }, {
    name: "Team leading",
    score: "70%",
  },{
    name: "Angular-Rxjs",
    score: "50%",
  }, 
  {
    name: "CSS-bootstrap",
    score: "90%",
  },
  {
    name: "CSS Animation",
    score: "80%",
  },
];

constructor(public load:LoadingService){

}

}
