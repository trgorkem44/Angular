import { BookService } from './../../servies/book.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookList:any[] = []
  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit(): void {
    this.getAllBook();
  }
  getAllBook(){
    this.bookService.getAllBook().subscribe((res:any)=>{
      this.bookList = res
    })
  }
  deleteBook(id:any){
    this.bookService.deleteBook(id).subscribe(()=>{
      this.getAllBook();
    })
  }
  updateBook(id:any){
    this.router.navigate(['/book/' + id])
  }
}
