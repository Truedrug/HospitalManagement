import {Component} from '@angular/core';
import {HospitalService} from '../services/hospital.service';

@Component({
  selector: 'hospital-view',
  templateUrl: './hospital-view.component.html',
  styleUrls: ['./hospital-view.component.css'],
})
export class HospitalViewComponent {
  hospitalDetails: any;
  constructor(public hospitalService: HospitalService) {}
  ngOnInit() {
    this.hospitalDetails = this.hospitalService.Hospitals;
  }
  sortByHospitalName() {
    this.hospitalDetails.sort(function(a, b) {
      if (a.hospitalname < b.hospitalname) {
        return -1;
      }
      if (a.hospitalname > b.hospitalname) {
        return 1;
      }
      return 0;
    });
  }
  onHospitalClick(hospitalName) {
    this.hospitalService.setCurrentHospital(hospitalName);
  }
}
