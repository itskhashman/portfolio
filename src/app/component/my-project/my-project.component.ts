import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { LoadingService } from '../Shared/assets/loading/loading.service';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrl: './my-project.component.scss'
})
export class MyProjectComponent {
  constructor(public load:LoadingService){

  }
}
