import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {DepartmentViewComponent} from './department-view/department-view.component';
import {HospitalViewComponent} from './hospital-view/hospital-view.component';
import {HospitalService} from './services/hospital.service';

const appRoutes: Routes = [
  {path: 'hospital', component: HospitalViewComponent},
  {path: 'department', component: DepartmentViewComponent},
  {path: '', redirectTo: '/hospital', pathMatch: 'full'},
  {path: '**', redirectTo: '/hospital', pathMatch: 'full'},
];

@NgModule({
  declarations: [AppComponent, DepartmentViewComponent, HospitalViewComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [HospitalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
