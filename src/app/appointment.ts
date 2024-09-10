export class Appointment {
    id: number = 0;
    name: string = "";
    doctorName: string = "";
    age: string = "";
    symptoms: string = "";
    mobile: string = "";
    registerDate: Date = new Date();
    updatedDate: Date | null = null;  // Updated to allow null values
    appointmentNumber: string = "";
  }
  