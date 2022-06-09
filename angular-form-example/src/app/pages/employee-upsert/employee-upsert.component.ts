import { DataService } from 'src/app/services/data.service';
import { EmployeeModel } from './../../models/employeeModel';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-upsert',
  templateUrl: './employee-upsert.component.html',
  styleUrls: ['./employee-upsert.component.css']
})
export class EmployeeUpsertComponent implements OnInit {
  departmentList:any[] = ['İnsan Kaynakları','Software','Network','Help Desk','Güvenlik','Genel Hizmetler','Muhasebe']
  employeeModel:EmployeeModel = new EmployeeModel();
  selecetedEmployeeId!:any;
  constructor(private service:DataService,
              private router:Router,
              private route:ActivatedRoute) { 
              this.selecetedEmployeeId = this.route.snapshot.paramMap.get('id');
              }

  ngOnInit(): void {
    this.getEmployeeById(this.selecetedEmployeeId)
  }
  save(form:NgForm){
    console.log(form.value)
    if(this.selecetedEmployeeId){
      this.service.updateEmployee(this.employeeModel).subscribe(()=>{
        this.router.navigate(['/home'])
      })
    }else{
      this.service.saveEmployye(this.employeeModel).subscribe(()=>{
        this.router.navigate(['/home']);
    })
    }
   
  }
  getEmployeeById(id:any){
    this.service.getEmployeeById(id).subscribe((res:EmployeeModel)=>{
      this.employeeModel = res;
    })
  }

}
