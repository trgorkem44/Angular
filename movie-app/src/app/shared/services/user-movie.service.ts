import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserMovieService {
  baseUrl:string = "http://localhost:3000/myList/"
  constructor(private http:HttpClient) { }

  addUserMovieList(model:any){
    return this.http.post(this.baseUrl,model)
  }

  getUserMovieList(){
    return this.http.get(this.baseUrl)
  }
  updateUserMovie(model:any){
    return this.http.put(this.baseUrl + model.id,model)
  }
  deleteUserMovie(id:any){
    return this.http.delete(this.baseUrl + id)
  }
  // someUserMovieList(id:any):boolean | any{
  //   this.getUserMovieList().subscribe((res:any)=>{
  //   return  res.some((item:any)=>item.id == id);

  //   })
  // }
}
