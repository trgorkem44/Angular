import { Message } from './../enum/messageEnum';
import { NoticationService } from './../servies/notication.service';
import { Traveller } from './../models/traveller.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nameSurname: string = '';
  gender: string = '';
  seat: number = 0;
  dataList: Array<Traveller> = []
  dateNow: any = new Date();
  searchText: string = ''
  constructor(private toastr: ToastrService,private notificationService:NoticationService) { }

  ngOnInit(): void {
  }
  add() {
    if (this.nameSurname && this.seat && this.gender && this.seatControl(this.seat)) {
      const traveller: Traveller = {
        nameSurname: this.nameSurname,
        gender: this.gender,
        seat: this.seat
      }
      this.dataList.push(traveller);
      this.notificationService.success(Message.addTraveller)
      this.clear();
    } else {
      this.notificationService.error(Message.validationFiled,'Eksik alan')
    }

  }
  clear() {
    this.nameSurname = ""
    this.gender = ""
    this.seat = 0
  }
  deleteItem(ix: number) {
    this.dataList.splice(ix, 1)
  }
  seatControl(seat: number): boolean {
    debugger;
    if (seat > 0 && seat < 51) {
      return !this.dataList.some(item => item.seat === seat)
    } else {
      return false
    }
  }

}
