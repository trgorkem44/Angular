import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
   userList:any[]=[
    {
      userName:'admin',
      password:'123',
      userType:'admin'
    },
    {
      userName:'eyüp',
      password:'123',
      userType:'user'
    }
  ]
  constructor(private router:Router,
              private toastr: ToastrService) { }

  login(userName:string,password:string){
    const currentUser = this.userList.find(user=>user.userName === userName && user.password === password)
    if(currentUser){
      localStorage.setItem('currentUser',JSON.stringify(currentUser));
      this.toastr.success('Giriş Başarılı','Anasayfaya Yönlediriliyorsunuz !')
        this.router.navigate(['/'])
    }else{
      this.toastr.error('Hata','Kullanıcı adı veya şifre hatalı !')
    }
  }
  logout(){
    localStorage.removeItem('currentUser');
    this.toastr.success('Çıkış Yaptınız !')
    this.router.navigate(['/login'])
  }
  isAuth(){
    const user:any = localStorage.getItem('currentUser')
    return JSON.parse(user)
  }
}
