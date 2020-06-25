import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {PaymentService} from '../payment.service'
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: []
})
export class PaymentComponent implements OnInit {
  paymentDetails = {}
  constructor(public service: PaymentService) { }

  ngOnInit() {
    this.service.getUser()
    
  }

  
  onSubmit(form: NgForm){
    if(this.service.userDeatils.PMId == 0){
      this.service.postUser().subscribe(
        res => this.service.getUser(),
        err=> console.log(err)
      )
    }else{
      this.service.updateUser().subscribe(
        res => this.service.getUser(),
        err=> console.log(err)
      )
    }
    
  }

  populateForm(list){
    this.service.userDeatils = Object.assign({},list)
  }

  onDelete(pd){
    console.log(pd)
    this.service.deleteUser(pd).subscribe(
      res => this.service.getUser(),
      err => console.log(err)
    )
  }

 


}
