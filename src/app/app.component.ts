import { AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { service } from './component/Shared/assets/service';
import { TranslateService } from '@ngx-translate/core';
import { EnToArService } from './component/Shared/assets/en-to-ar/en-to-ar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public translater : EnToArService){

  }

}

