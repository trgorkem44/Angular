import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './component/movie-card/movie-card.component'



@NgModule({
  declarations: [
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    MovieCardComponent
  ]
})
export class SharedModule { }
