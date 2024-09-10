import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent {

  patient: Patient = new Patient();

  constructor(private patientService: PatientService, private router: Router) {

  }

  savePatient(){
    this.patientService.createPatient(this.patient).subscribe(data => {
      console.log(data);
      this.goToPatientList();
    })
  }

  onSubmit(){
  this.savePatient();
  }

  goToPatientList(){
    this.router.navigate(['/doctordash']);
  }
}
