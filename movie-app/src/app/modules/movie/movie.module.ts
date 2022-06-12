import { SharedModule } from './../../shared/shared.module';
import { MovieService } from './../../shared/services/movie.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieUpsertComponent } from './pages/movie-upsert/movie-upsert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyListComponent } from './pages/my-list/my-list.component';

const route:Routes =[
  {
    path:'upsert-movie',
    component:MovieUpsertComponent
  },
  {
    path:'upsert-movie/:id',
    component:MovieUpsertComponent
  },
  {
    path:'my-list',
    component:MyListComponent
  }
  
]


@NgModule({
  declarations: [
    MovieUpsertComponent,
    MyListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
    SharedModule
  ],providers:[
    MovieService
  ]
})
export class MovieModule { }
