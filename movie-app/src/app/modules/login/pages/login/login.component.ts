
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = ""
  password: string = ""
  constructor(private authService: AuthService,
    private router: Router) {
    if (this.authService.isAuth()) {
      this.router.navigate(['/'])
    }
  }

  ngOnInit(): void {
  }
  login() {
    this.authService.login(this.userName, this.password);
  
  }
}
