import { EmployeeAddUpdateComponent } from './pages/employee-add-update/employee-add-update.component';
import { EmployeeUpsertComponent } from './pages/employee-upsert/employee-upsert.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  // {
  //   path:'employee-upsert/:id',
  //   component:EmployeeUpsertComponent
  // },
  // {
  //   path:'employee-upsert',
  //   component:EmployeeUpsertComponent
  // }
  {
    path:'employee',
    component:EmployeeAddUpdateComponent
  },
  {
    path:'employee/:id',
    component : EmployeeAddUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
