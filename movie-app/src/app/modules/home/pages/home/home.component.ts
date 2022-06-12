import { UserMovieService } from './../../../../shared/services/user-movie.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MovieService } from './../../../../shared/services/movie.service';
import { MovieModel } from './../../../../shared/models/movie.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser:any;
  movieList:MovieModel[] = [];
  constructor(private movieService:MovieService,
              private authService:AuthService,
              private router:Router,
              private userMovieService:UserMovieService) { 
            this.currentUser = this.authService.isAuth();
  }

  ngOnInit(): void {
    this.getMovieList();
  }

  getMovieList(){
      this.movieService.getMovieList().subscribe((res:any)=>{
        this.movieList = res;
      })
  }
  deleteMovie(id:any){
    this.movieService.deleteMovie(id).subscribe(()=>{
      this.getMovieList();
    });
  }
  updateMovie(id:any){
    this.router.navigate(['/movie/upsert-movie',id])
  }
  addMylist(movie:any){
    this.userMovieService.addUserMovieList(movie).subscribe(()=>{
      alert('Film Başarılı bir Şekilde eklenmiştir')
    });
  }

}
