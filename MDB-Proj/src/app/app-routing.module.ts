import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }  from './components/home/home.component';
import { AboutComponent }  from './components/about/about.component';
import { NWN2CharsListComponent} from './components/nwn2chars-list/nwn2chars-list.component';
import { ContactComponent} from './components/contact/contact.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'about', component: AboutComponent },
  { path: 'nwn2chars', component: NWN2CharsListComponent },
  { path: 'contact', component: ContactComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
