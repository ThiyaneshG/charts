import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  user:any;
  constructor(private callApi:ApiService)
  {
    this.callApi.user().subscribe((data)=>{
      this.user=data;
    })
  }
}
