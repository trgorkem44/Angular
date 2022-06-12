import { UserMovieService } from './../../../../shared/services/user-movie.service';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from './../../../../shared/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-upsert',
  templateUrl: './movie-upsert.component.html',
  styleUrls: ['./movie-upsert.component.css']
})
export class MovieUpsertComponent implements OnInit {
  movieTypeList: string[] = []
  selectedMovieId: any;
  constructor(private movieService: MovieService,
    private fb: FormBuilder,
    private location: Location,
    private route: ActivatedRoute,
    private toastrService:ToastrService,
    private userMovieService:UserMovieService) {
    this.selectedMovieId = this.route.snapshot.paramMap.get('id');
  }


  movieForm = this.fb.group({
    id: new FormControl(null),
    name: new FormControl("", Validators.required),
    type: new FormControl("", Validators.required),
    poster: new FormControl("", Validators.required),
    point: new FormControl(0, Validators.required),
    actors: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
  })

  ngOnInit(): void {
    this.getMovieTypeList();
    if (this.selectedMovieId) {
      this.movieService.getMovieById(this.selectedMovieId).subscribe(res => {
        this.movieForm.patchValue(res);
      })
    }
  }
  getMovieTypeList() {
    this.movieService.getMovieTypes().subscribe(res => {
      this.movieTypeList = res;
    })
  }
  save() {
    if (this.movieForm.valid) {
      console.log(this.movieForm.value)
      const model = this.movieForm.value;
      if (this.selectedMovieId) {
        this.update(model)
      } else {
        this.movieService.addMovie(model).subscribe(() => {
          this.toastrService.success('Film Eklenmiştir')
          this.movieForm.reset();
        })
      }
    } else {
      this.toastrService.warning('Lütfen Tüm alanları Doldurunuz !')
    }
  }
  backPage() {
    this.location.back();
  }
  update(model:any){
    debugger;
    this.movieService.updateMovie(model).subscribe(() => {
      this.userMovieService.getUserMovieList().subscribe((res:any)=>{
        if(res.some((item:any)=>item.id == this.selectedMovieId)){
          this.userMovieService.updateUserMovie(model).subscribe(()=>{
            console.log('mylist güncelledndi')
          })
        }
      })
      this.toastrService.success('Güncelle Başarılı')
      this.location.back();
    })
  }
}
