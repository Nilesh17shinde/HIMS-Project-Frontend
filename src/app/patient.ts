export class Patient {
    id: number = 0;
    name: string = "";
    age: string = "";
    mobile: string = "";
    gender: string = "";
    blood: string = "";
    prescription: string = "";
    dose: string = "";
    fees: string = "";
    urgency: string = "";
    registerDate: Date = new Date();
    updatedDate: Date | null = null;  // Updated to allow null values
  }
  