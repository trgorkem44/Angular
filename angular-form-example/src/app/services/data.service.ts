import { EmployeeModel } from './../models/employeeModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl:string = "http://localhost:3000/employee/"
  constructor(private http:HttpClient) { }
  getAllEmployee(){
    return this.http.get(this.apiUrl)
  }
  saveEmployye(employee:any){
    return this.http.post(this.apiUrl,employee)
  }
  deleteEmployee(id:number){
    return this.http.delete(this.apiUrl + id)
  }
  getEmployeeById(id:any){
    return this.http.get<EmployeeModel>(this.apiUrl + id)
  }
  updateEmployee(model:any){
    return this.http.put(this.apiUrl + model.id,model)
  }
}
