import { Component } from '@angular/core';
import { LoadingService } from '../Shared/assets/loading/loading.service';

@Component({
  selector: 'app-ending',
  templateUrl: './ending.component.html',
  styleUrl: './ending.component.scss'
})
export class EndingComponent {
  constructor(public load:LoadingService){

  }
}
