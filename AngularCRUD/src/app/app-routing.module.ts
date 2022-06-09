import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

import { NWN2CharsListComponent } from './components/nwn2chars-list/nwn2chars-list.component';
import { NWN2CharDetailsComponent } from './components/nwn2char-details/nwn2char-details.component';
import { AddNWN2CharComponent } from './components/add-nwn2char/add-nwn2char.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'nwn2chars', component: NWN2CharsListComponent },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'nwn2chars/:id', component: NWN2CharDetailsComponent },
  { path: 'add', component: AddTutorialComponent},
  { path: 'addnwn', component: AddNWN2CharComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
