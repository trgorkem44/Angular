import { EmployeeModel } from './../../models/employeeModel';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-employee-add-update',
  templateUrl: './employee-add-update.component.html',
  styleUrls: ['./employee-add-update.component.css']
})
export class EmployeeAddUpdateComponent implements OnInit {
  departmentList: any[] = ['İnsan Kaynakları', 'Software', 'Network', 'Help Desk', 'Güvenlik', 'Genel Hizmetler', 'Muhasebe']
  selecetedEmployeeId: any;
  employeeForm = this.fb.group({
    id:new FormControl(),
    nameSurname: new FormControl("", [Validators.required, Validators.minLength(5)]),
    age: new FormControl("", Validators.required),
    salary: new FormControl("", Validators.required),
    department: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required)
  })
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: DataService,
    private router : Router) {
    this.selecetedEmployeeId = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.getEmployeeById(this.selecetedEmployeeId)
  }

  save() {
    if (this.employeeForm.invalid) {
      alert('Eksik veya Hatalı Alanlar Vardır')
      return
    }
    const employee: EmployeeModel = this.employeeForm.value;
    if(this.selecetedEmployeeId){
      this.service.updateEmployee(employee).subscribe(res=>{
        this.router.navigate(['/home'])
      })
    }else{
      this.service.saveEmployye(employee).subscribe(res=>{
        this.router.navigate(['/home'])
      })
    }
  
  }
  getEmployeeById(id:any){

    this.service.getEmployeeById(id).subscribe(res=>{
      this.employeeForm.patchValue(res);
    })
  }

}
