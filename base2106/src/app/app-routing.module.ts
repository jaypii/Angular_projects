import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './home/home.component';
import { About } from './about/about.component';
import { FeaturesComponent} from './features/features.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: Home },
  { path: 'features', component: FeaturesComponent},
  { path: 'about', component: About },
  { path: 'create', component: EmployeeCreateComponent },
  { path: 'list', component: EmployeesListComponent },
  { path: 'edit/:id', component: EmployeeEditComponent }    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
