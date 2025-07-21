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

  myskills: skills[] = [ {
    name: "Angular - 18+",
    score: "50%",
  },{
    name: "HTML5 - CSS - Typescript",
    score: "70%",
  }, {
    name: "C++ - Java - python",
    score: "40%",
  },{
    name: "SQL - API Integrations",
    score: "40%",
  }, 
  {
    name: "OOP (Java)",
    score: "80%",
  },{
    name: "Proplem solving - Algorithms",
    score: "60%",
  }
];

constructor(public load:LoadingService){

}

}
