import { Component } from '@angular/core';
import { EnToArService } from '../Shared/assets/en-to-ar/en-to-ar.service';

@Component({
  selector: 'app-lang-button',
  templateUrl: './lang-button.component.html',
  styleUrl: './lang-button.component.scss'
})
export class LangButtonComponent {
  constructor(public translater : EnToArService){

  }
}
