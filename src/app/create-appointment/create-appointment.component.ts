import { Component } from '@angular/core';
import { Appointment } from '../appointment'; // Adjust path as per your project structure
import { AppointmentService } from '../appointment.service'; // Adjust path as per your project structure
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent {

  appointment: Appointment = new Appointment();

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  onSubmit() {
    this.saveAppointment();
  }

  saveAppointment() {
    this.appointmentService.createAppointment(this.appointment).subscribe(data => {
      console.log(data);
      this.goToAppointmentList();
    });
  }

  goToAppointmentList() {
    this.router.navigate(['/appointmentlist']);
  }
}
