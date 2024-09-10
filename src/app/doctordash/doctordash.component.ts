import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-doctordash',
  templateUrl: './doctordash.component.html',
  styleUrls: ['./doctordash.component.css']
})
export class DoctordashComponent implements OnInit {

  patients: Patient[] = [];
  patient: Patient = new Patient(); // Declare patient object

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.getPatients();
  }

  // Fetch the list of patients
  getPatients(): void {
    this.patientService.getPatientList().subscribe(data => {
      this.patients = data;
    }, error => {
      console.error('Error fetching patient list', error);
    });
  }

  // Add or update patient
  onSubmit(): void {
    if (this.patient.id === 0) {
      // Adding a new patient
      this.patient.registerDate = new Date();
      this.patient.updatedDate = null; // Allow null for new patient
    } else {
      // Updating an existing patient
      this.patient.updatedDate = new Date(); // Update date for existing patient
    }

    this.patientService.createPatient(this.patient).subscribe(() => {
      this.getPatients(); // Refresh patient list
      this.clearForm();   // Clear form fields after submission
    }, error => {
      console.error('Error saving patient', error);
    });
  }

  // Function to clear form fields (if needed)
  clearForm(): void {
    this.patient = new Patient(); // Reset the patient object
  }
}
