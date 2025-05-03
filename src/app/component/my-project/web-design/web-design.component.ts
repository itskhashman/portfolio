import { Component } from '@angular/core';
import { projects } from '../../Shared/assets/service';
import { SharedDataService } from '../shared-data/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-design',
  templateUrl: './web-design.component.html',
  styleUrl: './web-design.component.scss'
})export class WebDesignComponent {

  webdesigns: projects[] = [
    {
      link: "https://tahaworld.com/uploads/thumbs/webdes-w-850-h-475.png",
      name: "Mac Web",
      desc: "I focus on creating user-friendly interfaces that not only look great but also provide seamless experiences across all devices"
    },
    {
      link: "https://static.whatsapp.net/rsrc.php/v3/y5/r/cJXjAoffU5Q.png",
      name: "Zenon-Website",
      desc: "I focus on creating user-friendly interfaces that not only all devices"
    }
  ];


  constructor(private shared: SharedDataService , private router: Router) { }


  ngOnInit(): void {
    this.senddata(); // Call it once during initialization
  }

  senddata() {
    // Check if data has already been sent
    if (!this.shared.webdataSent) {
      this.shared.setprojects(this.webdesigns);
      this.shared.webdataSent = true; // Set flag to true after sending data
    }
  }

  reloadPage(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.router.url]);
    });
  }

}
