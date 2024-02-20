import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirlinesService } from '../airlines.service';

@Component({
  selector: 'app-airlines-list',
  templateUrl: './airlines-list.component.html',
  styleUrl: './airlines-list.component.css'
})
export class AirlinesListComponent implements OnInit {
  constructor(private airlinesService:AirlinesService,private router:Router){}
  public airlinesArray:any[]=[];
  public errormessage:string='';
  ngOnInit(): void {
    
    this.getAirlines();
  }
  getAirlines(){
          this.airlinesService.getAirlines().subscribe((response)=>{
            this.airlinesArray=response;
          },(error)=>{
            this.errormessage="no flight found"
          })
  }
  showBookingForm(airlinesId:any)
  {
    this.router.navigate(["/book-ticket",airlinesId]);
  }



}

