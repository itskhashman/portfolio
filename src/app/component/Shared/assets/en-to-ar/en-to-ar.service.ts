import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class EnToArService {


  isArabic: boolean = false;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['ar', 'en']);// german and english
    this.translate.setDefaultLang('en');// if there is no translation the langauage in en
    this.useLanguage('en');
  }

  
  public useLanguage(language: string): void {
    this.translate.use(language);
    if (language == 'ar')
      this.isArabic = true;
    if (language == 'en')
      this.isArabic = false;
    this.changeAlignment();
  }

  
  changeAlignment() {
    const myDivs = document.querySelectorAll("div");
    if (myDivs) {
      if (this.isArabic) {
        myDivs.forEach((div) => {
          div.classList.add("flex-row-reverse");
          div.classList.remove("text-md-start");
          
          div.classList.remove("text-start");
          div.classList.add("text-end");
          div.classList.remove("text-md-end");
          
    });
      }
      else if (!this.isArabic) {
        myDivs.forEach((div) => {
          div.classList.remove("flex-row-reverse");
          div.classList.remove("text-end");
          div.classList.add("text-start");
        });
      }
    }
  }

  
}
