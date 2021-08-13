import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

// Forms module
import { FormsModule } from '@angular/forms';

// Import components
import { Home } from './home/home.component';
import { About } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesListComponent } from './employee-list/employee-list.component';

// Directives
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    About,
    FeaturesComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeesListComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
