import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employeeList:any[] = [];
  constructor(private dataService:DataService,
              private router:Router) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee(){
    this.dataService.getAllEmployee().subscribe((result:any)=>{
      this.employeeList = result;
    })
  }
  newEmployee(){
    // this.router.navigate(['/employee-upsert']);
    this.router.navigate(['/employee']);
  }
  deleteEmployee(id:number){
      this.dataService.deleteEmployee(id).subscribe(()=>{
        alert('Çalışan Silindi');
        this.getAllEmployee();
      })
  }
  updateEmployee(id:number){
    // this.router.navigate(['/employee-upsert',id]);
    this.router.navigate(['/employee',id]);
  }
}
