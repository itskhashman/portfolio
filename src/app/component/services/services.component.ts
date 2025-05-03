import { Component } from '@angular/core';
import { service } from '../Shared/assets/service';
import { AppComponent } from '../../app.component';
import { LoadingService } from '../Shared/assets/loading/loading.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  constructor(public load:LoadingService){

  }


  myservices: service[] = [{
    link: "https://www.svgrepo.com/show/278585/outdent-ui.svg",
    name: "UI/UX",
    desc: "I focus on creating user-friendly interfaces that not only look great but also provide seamless experiences across all devices"
  }, {
    link: "https://www.svgrepo.com/show/375320/html-document.svg ",
    name: "Wed-design",
    desc: "I focus on creating user-friendly interfaces that not only look great but also provide seamless experiences across all devices"
  }, {
    link: "https://www.svgrepo.com/show/452228/html-5.svg",
    name: "coding",
    desc: "I focus on creating user-friendly interfaces that not only look great but also provide seamless experiences across all devices"
  }];




}
