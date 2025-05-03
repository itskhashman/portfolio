import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routes';
import { AppNavComponent } from './component/app-nav/app-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AboutmeComponent } from './component/abouts-me/abouts-us.component';
import { ServicesComponent } from './component/services/services.component';
import { HomeComponent } from './component/Home/Home.component';
import { SwitchToggleComponent } from './component/toggle/switch-toggle.component';
import { MyProjectComponent } from './component/my-project/my-project.component';
import { UiUxComponent } from './component/my-project/ui-ux/ui-ux.component';
import { AllComponent } from './component/my-project/all/all.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { WebDesignComponent } from './component/my-project/web-design/web-design.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { ContactMeComponent } from './component/contact-me/contact-me.component';
import { EndingComponent } from './component/ending/ending.component';
import { NgxSplideModule } from 'ngx-splide';
import { BackTopComponent } from './component/back-top/back-top.component';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LangButtonComponent } from './component/lang-button/lang-button.component';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './i18n/');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppNavComponent,
    AboutmeComponent,
    ServicesComponent,
    SwitchToggleComponent,
    MyProjectComponent,
    AllComponent,
    UiUxComponent,
    WebDesignComponent,
    TestimonialsComponent,
    ContactMeComponent,
    EndingComponent,
    SwitchToggleComponent,
    BackTopComponent,
    LangButtonComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    RouterOutlet,
    NgxSplideModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [

  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})


export class AppModule { }
