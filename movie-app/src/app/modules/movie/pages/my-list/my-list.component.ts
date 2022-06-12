import { ToastrService } from 'ngx-toastr';
import { MovieModel } from './../../../../shared/models/movie.model';
import { UserMovieService } from './../../../../shared/services/user-movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {
  myMovieList:MovieModel[] = []
  constructor(private userMovieService:UserMovieService,
              private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getMyMovieList();
  }

  getMyMovieList(){
    this.userMovieService.getUserMovieList().subscribe((res:any)=>{
        this.myMovieList = res;
    })
  }

  selectedDeleteMovieId(value:any){
    this.userMovieService.deleteUserMovie(value).subscribe(()=>{
      this.toastrService.success('Silme işlemi Başarılı')
      this.getMyMovieList();
    })
  }

}
