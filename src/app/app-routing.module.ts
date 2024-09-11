import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DoctordashComponent } from './doctordash/doctordash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';

const routes: Routes = [
  {
     path: 'admin', component: AdmindashComponent 
    },
  {
     path: 'appointmentlist', component: AppointmentComponent 
    },
  { 
    path: 'create-appointment', component: CreateAppointmentComponent 
  },
  {
    path: 'home',component:HomeComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'doctordash', component: DoctordashComponent
  },
  {
  path: 'add-patient', component: CreatePatientComponent
  },
  {
   path: 'add-medicines', component: MedicinelistComponent 
  }  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
