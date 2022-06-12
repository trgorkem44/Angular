
import { MovieModel } from './../../models/movie.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movieInfo!: MovieModel;
  @Output() deleteMovie = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  deleteMovieToMyList(id:any){
    this.deleteMovie.emit(id);
  }

}
