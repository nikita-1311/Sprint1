import { Component, OnInit } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  providers:[StatusService]
})
export class StatusComponent {
  public status: any;

  constructor(private service: StatusService) {
     // this.status = service.getOrderStatus();
     this.status = [
      // {
      //   status: "packed"
      // }
      // {
      //   status: "shipped"
      // }
      {
        status: "delivered"
      }
    ];
  }
  }


