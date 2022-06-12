import { MovieModel } from './../models/movie.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl='http://localhost:3000/movie/'
  constructor(private http:HttpClient) { }

  getMovieTypes(){
    const list:string[] = ["Aksiyon","Drama","Belgesel","Korku","Bilim Kurgu","Komedi","Fantastik","Polisiye","Macera"]
    return of(list)
  }
  addMovie(model:MovieModel){
    return this.http.post(this.baseUrl,model);
  }

  getMovieList(){
    return this.http.get(this.baseUrl)
  }
  deleteMovie(id:any){
    return this.http.delete(this.baseUrl + id)
  }
  updateMovie(model:MovieModel){
    return this.http.put(this.baseUrl + model.id,model)
  }
  getMovieById(id:any){
    return this.http.get(this.baseUrl + id)
  }
}
