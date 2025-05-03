import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit, Renderer2 } from '@angular/core';
//import { CoreService } from 'src/assets/services/core.service';

@Component({
  selector: 'app-switch-toggle',
  templateUrl: './switch-toggle.component.html',
  styleUrls: ['./switch-toggle.component.scss']
})
export class SwitchToggleComponent implements OnInit{

  @Input() isLightTheme : boolean = false;

  constructor(
    private renderer: Renderer2,@Inject(DOCUMENT) private document: Document,
    //private coreService : CoreService
  ) { }

  ngOnInit(): void {
    this.isLightTheme =localStorage.getItem('isLightTheme') == 'true' ? false : true; 
    this.isLightTheme = false;   
    this.toggleTheme()
  }


  toggleTheme() { 
    this.isLightTheme = !this.isLightTheme;
    localStorage.setItem('isLightTheme' , String(this.isLightTheme));
    //  this.renderer.removeClass(document.body, this.isLightTheme ? 'dark-mode' : 'light-mode');
    this.renderer.setAttribute(this.document.body, 'class', this.isLightTheme ? 'dark-mode'  : 'light-mode' );

    //this.coreService.isLightMode  =  this.isLightTheme
  }
}
