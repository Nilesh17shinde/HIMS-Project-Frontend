import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = 'http://localhost:8080/api/patient/getAll';

  private deleteUrl = 'http://localhost:8080/api/patient/delete';

  private insertUrl = 'http://localhost:8080/api/patient/insert';

  constructor(private httpClient: HttpClient) { }

  getPatientList(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(this.baseUrl);
  }

  deletePatient(id: number): Observable<any> {
    return this.httpClient.delete(`${this.deleteUrl}/${id}`);
  }

  createPatient(patient: Patient): Observable<Patient> {
    return this.httpClient.post<Patient>(`${this.insertUrl}`, patient);
  }
}
