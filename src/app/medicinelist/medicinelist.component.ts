import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrls: ['./medicinelist.component.css']
})
export class MedicinelistComponent {
  medicines: Medicine[] = [];
constructor(private medicineService: MedicineService) {
  
}
ngOnInit(): void {
  this.getMedicines();
}
getMedicines() {
  this.medicineService.getMedicines().subscribe(data => {
    this.medicines = data;

  })
}
}
