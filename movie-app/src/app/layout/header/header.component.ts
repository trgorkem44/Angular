import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser:any;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }
  logout(){
    this.authService.logout();
  }
  getCurrentUser(){
   this.currentUser = this.authService.isAuth()
  }
}
