import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'employee-list' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent },
  { path: 'employee-edit/:id', component: EmployeeEditComponent },
  { path: 'employee-list', component: EmployeeListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
