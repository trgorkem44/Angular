import { BookService } from './../../servies/book.service';
import { BookModel } from './../../models/book.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookModel:BookModel = new BookModel();
  selectedBookId:any;
  constructor(private service:BookService,private router:Router
    ,private route:ActivatedRoute) {
      this.selectedBookId = this.route.snapshot.paramMap.get('bookId');
      console.log(this.selectedBookId)
   }

  ngOnInit(): void {
    if(this.selectedBookId){
      this.getBookById(this.selectedBookId)
    }
  }
  addProduct(){
    this.service.addBook(this.bookModel).subscribe(()=>{
      this.router.navigate(['/home'])
    });
  }
  getBookById(id:any){
    this.service.getBookById(id).subscribe((res:any)=>{
      this.bookModel = res;
    })
  }
  updateBook(){
    this.service.updateBook(this.bookModel).subscribe(()=>{
      this.router.navigate(['/home'])
    })
  }
}
