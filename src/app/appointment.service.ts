import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = 'http://localhost:8080/api/appointment/getAll'; // Replace with your actual backend URL
  private baseInsertUrl = 'http://localhost:8080/api/appointment/insert';
  private baseDeleteUrl = 'http://localhost:8080/api/appointment/delete';

  constructor(private httpClient: HttpClient) { }

  getAllAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(this.baseUrl);
  }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(this.baseInsertUrl, appointment);
  }

  deleteAppointment(id: number): Observable<object> { // Return type is void for simplicity
    return this.httpClient.delete(`${this.baseDeleteUrl}/${id}`);
  }  
}
