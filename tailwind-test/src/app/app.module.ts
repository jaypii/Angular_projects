import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamComponent } from './team/team.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'team', component: TeamComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    FooterComponent,
    DashboardComponent,
    TeamComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
