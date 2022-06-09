import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 private baseUrl:string ="http://localhost:3000/book/"
  constructor(private http:HttpClient) { }
  getAllBook(){
    //get method 
    return this.http.get(this.baseUrl);
  }
  addBook(model:any){
    return this.http.post(this.baseUrl,model)
  }
  deleteBook(id:any){
    return this.http.delete(this.baseUrl + id)
  }
  getBookById(id:any){
    return this.http.get(this.baseUrl +id)
  }
  updateBook(model:any){
    debugger;
  return this.http.put(this.baseUrl + model.id,model)
  }
}
