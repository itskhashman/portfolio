import { Component, DoCheck, Inject, inject, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { AppComponent } from '../../app.component';
import { LoadingService } from '../Shared/assets/loading/loading.service';
import { EnToArService } from '../Shared/assets/en-to-ar/en-to-ar.service';

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrl: './app-nav.component.scss'
})
export class AppNavComponent implements OnInit {

  showdashh: boolean = false;
  loading = true;
    constructor(public load:LoadingService , public translater : EnToArService){

    }
  ngOnInit(): void {
    }


  showdash() {
    this.showdashh = !this.showdashh;
  }

  navigateToContact(target : string): void {
    const contactSection = document.getElementById(target);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  

  

}
