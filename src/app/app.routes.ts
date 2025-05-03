import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutmeComponent } from './component/abouts-me/abouts-us.component';
import { AllComponent } from './component/my-project/all/all.component';
import { UiUxComponent } from './component/my-project/ui-ux/ui-ux.component';
import { WebDesignComponent } from './component/my-project/web-design/web-design.component';


export const routes: Routes = [
  {path : "all" , component:AllComponent},
  {path : "", component:AllComponent},
  {path : "uiux", component:UiUxComponent},
  {path : "web-design", component:WebDesignComponent},
  //{path:"" ,redirectTo :"/all "}
  ];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}



