export class Medicine {
    id: number = 0;
    drugsName: string = "";
    stock: number = 0;  // Changed from string to number
    registerDate: Date = new Date();
    updatedDate: Date | null = null;
    medicineId: string = "";
}
