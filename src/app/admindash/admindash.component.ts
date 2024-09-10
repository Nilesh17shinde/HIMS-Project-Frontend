import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getPatientList();
  }

  getPatientList() {
    this.patientService.getPatientList().subscribe(data => {
      this.patients = data;
    });
  }

  delete(id: number) {
    if (confirm('Are you sure you want to delete this patient?')) {
      this.patientService.deletePatient(id).subscribe(data => {
        console.log('Deleted patient with ID:', id);
        this.getPatientList(); // Refresh the list after deletion
      })
    }
  }
}