import {Component} from '@angular/core';
import {HospitalService} from '../services/hospital.service';

@Component({
  selector: 'department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.css'],
})
export class DepartmentViewComponent {
  departmentDetails: any;
  constructor(public hospitalService: HospitalService) {}
  ngOnInit() {
    this.departmentDetails = this.hospitalService.Departments.filter(
      dept => dept.hospitalname === this.hospitalService.getCurrentHospital()
    );
  }
}
