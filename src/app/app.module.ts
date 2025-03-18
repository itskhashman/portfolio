import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgxSplideModule } from 'ngx-splide';

// Components
import { AppComponent } from './app.component';
import { AppNavComponent } from './component/app-nav/app-nav.component';
import { AboutmeComponent } from './component/abouts-me/abouts-us.component';
import { ServicesComponent } from './component/services/services.component';
import { HomeComponent } from './component/Home/Home.component';
import { SwitchToggleComponent } from './component/toggle/switch-toggle.component';
import { MyProjectComponent } from './component/my-project/my-project.component';
import { UiUxComponent } from './component/my-project/ui-ux/ui-ux.component';
import { AllComponent } from './component/my-project/all/all.component';
import { WebDesignComponent } from './component/my-project/web-design/web-design.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { ContactMeComponent } from './component/contact-me/contact-me.component';
import { EndingComponent } from './component/ending/ending.component';
import { BackTopComponent } from './component/back-top/back-top.component';
import { LangButtonComponent } from './component/lang-button/lang-button.component';

// Required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './i18n/', '.json');
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
    BackTopComponent,
    LangButtonComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    NgxSplideModule,
    HttpClientModule, // <-- Add this
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule {}
