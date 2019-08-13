import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { CubeComponent } from './cube/cube.component';
import { PanoramaEquirectangularComponent } from './panorama-equirectangular/panorama-equirectangular.component';
import { D2Component } from './d2/d2.component';
import { SceneComponent } from './scene/scene.component';

const appRoutes: Routes = [
   { path: 'cube', component: CubeComponent},
   { path: 'pano', component: PanoramaEquirectangularComponent },
   { path: 'd2', component: D2Component},
   { path: 'scene', component: SceneComponent},
   { path: '',   redirectTo: 'cube', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}