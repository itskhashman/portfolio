import { AfterContentInit, AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { UiUxComponent } from '../ui-ux/ui-ux.component';
import { WebDesignComponent } from '../web-design/web-design.component';
import { projects } from '../../Shared/assets/service';
import { SharedDataService } from '../shared-data/shared-data.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrl: './all.component.scss'
})
export class AllComponent  {
  
  constructor(public shared: SharedDataService) {
  }
  
}