import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup|any;

  constructor(private formBuilder : FormBuilder,private _http:HttpClient, private _route:Router) { }

  ngOnInit(): void {
    this.login = this.formBuilder.group({
      'fname': ['',Validators.required],
      'password': ['',Validators.required]
    })
  }

  logindata(login:FormGroup){
   
    this._http.get<any>("http://localhost:3000/signup")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.fname === this.login.value.fname && a.password === this.login.value.password
      });

      if(user){
        alert('you are successfully login');
        this.login.reset();
       ;
        this._route.navigate(['dashboard']);
      }else{
        alert('User Not Found');
        this._route.navigate(['login']);
      }
    }, err=>{
      alert('Something was wrong');
    })
   

  }

}
