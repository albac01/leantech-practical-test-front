import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { PositionsComponent } from './components/positions/positions.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "create", component: CreateComponent },
  { path: "update", component: UpdateComponent },
  { path: "delete", component: DeleteComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "positions", component: PositionsComponent },
  { path: '**', pathMatch: 'full', redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
