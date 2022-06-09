import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList: any[] = [{ id: 1, name: 'telefon', price: 12000 }, { id: 2, name: 'laptop', price: 22000 }];
  selectedProductId!:any;
  constructor(private route:ActivatedRoute) {
    debugger;
  this.selectedProductId = this.route.snapshot.paramMap.get('id')
  console.log(this.selectedProductId)
  let result =this.productList.find(item=>item.id == this.selectedProductId)
  console.log(result)
  }

  ngOnInit(): void {
  }

}
