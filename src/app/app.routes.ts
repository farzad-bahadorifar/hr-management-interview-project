import { Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './features/employee-details/employee-details.component';
import { UnitListComponent } from './features/units/unit-list/unit-list.component';
import { EmployeeListComponent } from './features/employees/employee-list/employee-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'units', pathMatch: 'full' },
  { path: 'units', component: UnitListComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/:id', component: EmployeeDetailsComponent },
];
