import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PaymentDetail } from './shared/payment-detail.model';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  userDeatils = {
    PMId: 0,
    CardOwnerName: '',
    CardNumber: '',
    ExpirationDate: '',
    CVV: ''
  }
  list: PaymentDetail[]
  constructor(private http: HttpClient) { }

  postUser(){
    return this.http.post('http://localhost:49861/api/PaymentDetail',this.userDeatils)
  }

  getUser(){
    return this.http.get('http://localhost:49861/api/PaymentDetail')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[])
    
  }

  updateUser(){
    return this.http.put('http://localhost:49861/api/PaymentDetail/'+ this.userDeatils.PMId,this.userDeatils)
  }

  deleteUser(id){
    return this.http.delete('http://localhost:49861/api/PaymentDetail/'+ id)
  }
}
