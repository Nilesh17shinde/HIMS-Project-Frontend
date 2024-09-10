import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointments: Appointment[] = [];
  appointment: Appointment = new Appointment();  // This is needed to track the form inputs.

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.getAppointments();
  }

  // Fetch the list of appointments
  getAppointments(): void {
    this.appointmentService.getAllAppointments().subscribe(data => {
      this.appointments = data;
    }, error => {
      console.error("Error fetching appointments", error);
    });
  }

  // Add or update an appointment
  onSubmit(): void {
    if (this.appointment.id === 0) {
      // Adding a new appointment
      this.appointment.registerDate = new Date();
      this.appointment.updatedDate = null;  // Now allowed to be null
    } else {
      // Updating an existing appointment
      this.appointment.updatedDate = new Date();
    }
  
    this.appointmentService.createAppointment(this.appointment).subscribe(() => {
      this.getAppointments();
      this.clearForm();
    });
  }
  

  // Delete an appointment
  delete(id: number): void {
    if (confirm('Are you sure you want to delete this appointment?')) {
      this.appointmentService.deleteAppointment(id).subscribe(() => {
        console.log('Deleted appointment with ID:', id);
        this.getAppointments(); // Refresh the list after deletion
      }, error => {
        console.error("Error deleting appointment", error);
      });
    }
  }

  // Edit an existing appointment
  editAppointment(appointment: Appointment): void {
    this.appointment = { ...appointment };  // Create a copy of the appointment for editing
  }

  // Clear the form
  clearForm(): void {
    this.appointment = new Appointment();  // Reset the form to a new appointment object
  }
}
