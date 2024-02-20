import { Component, OnInit } from '@angular/core';
import {FormControl,Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AirlinesService } from '../airlines.service';


@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrl: './book-ticket.component.css'
})
export class BookTicketComponent implements OnInit {
  constructor(private _aroute:ActivatedRoute,private fb:FormBuilder,private ias:AirlinesService){}
  public airlinesId:string='';
  public bookingForm:FormGroup=new FormGroup({});
  public successmesage:string='';
  public errormessage:string='';
  ngOnInit():void{
    this._aroute.params.subscribe((data)=>{
      this.airlinesId=data['airlinesId']
    })
    this.bookingForm=this.fb.group({
      airlinesId:[{value:this.airlinesId,disabled:true},[Validators.required]],
      customerName:['',[Validators.required,Validators.pattern(/^[a-zA-z]{5,}$/)]],
      noOfTickets:['',[Validators.required,Validators.min(1),Validators.max(6)]],
      dateofJourney:['',[Validators.required,this.validateDate]]
    })


  }
  validateDate(c:FormControl){
    let doj=new Date(c.value);
    let today=new Date();
    if(doj<today){
      return{dateError:{message:"Journey Date cant be past date"}}
    }
    return null

  }
  bookTickets(){
    this.successmesage=this.errormessage=''
    this.ias.bookticket(this.bookingForm.value).subscribe((data)=>{
      this.successmesage="your ticket is successfully Booked.Booking id "+data.id;
    },(error)=>{
      this.errormessage='Booking Failed'
    })
  }

}
