import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { projects } from '../../Shared/assets/service';
import { SharedDataService } from '../shared-data/shared-data.service';

@Component({
  selector: 'app-ui-ux',
  templateUrl: './ui-ux.component.html',
  styleUrl: './ui-ux.component.scss'
})
export class UiUxComponent implements OnInit {

  public UIUX: projects[] = [{
    link: "https://testfort.com/wp-content/uploads/2020/01/1-UI_UX-Testing-1120x560.png",
    name: "UIUX",
    desc: "I focus on creating user-friendly interfaces that not only look great but also provide seamless experiences across all devices"
  }, {
    link: "https://testfort.com/wp-content/uploads/2020/01/1-UI_UX-Testing-1120x560.png",
    name: "uiux",
    desc: "I focus on creating user-friendly interfaces that not only look great but also provide seamless experiences across all devices"
  }];
  counter = 1;
  constructor(private shared: SharedDataService) {

  }

  ngOnInit(): void {
    this.senddata(); // Call it once during initialization
  }

  senddata() {
    // Check if data has already been sent
    if (!this.shared.uiuxdataSent) {
      this.shared.setprojects(this.UIUX);
      this.shared.uiuxdataSent = true; // Set flag to true after sending data
    }
  }
}
