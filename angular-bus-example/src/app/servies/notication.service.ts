import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticationService {

  constructor(private toastr: ToastrService) { }

  success(message: string, title: string = 'Başarılı !', duraction: number = 3000) {
    this.toastr.success(message, title, { timeOut: duraction, closeButton: true })
  }
  error(message: string, title: string = 'Hata !', duraction: number = 3000) {
    this.toastr.error(message, title, { timeOut: duraction, closeButton: true })
  }
  warning(message: string, title: string = 'Dikkat !', duraction: number = 3000) {
    this.toastr.warning(message, title, { timeOut: duraction, closeButton: true })
  }

}
