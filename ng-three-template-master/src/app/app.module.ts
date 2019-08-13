import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { UiInfobarTopComponent } from './ui/ui-infobar-top/ui-infobar-top.component';
import { UiSidebarLeftComponent } from './ui/ui-sidebar-left/ui-sidebar-left.component';
import { CubeComponent } from './cube/cube.component';
import { PanoramaEquirectangularComponent } from './panorama-equirectangular/panorama-equirectangular.component';
import { D2Component } from './d2/d2.component';
import { SceneComponent } from './scene/scene.component';

@NgModule({
  declarations: [
    AppComponent,
    UiInfobarTopComponent,
    UiSidebarLeftComponent,
    CubeComponent,
    PanoramaEquirectangularComponent,
    D2Component,
    SceneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
