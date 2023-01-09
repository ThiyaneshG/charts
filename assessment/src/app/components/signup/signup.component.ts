import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

constructor(private formBuilder : FormBuilder, private _route:Router, private _http:HttpClient) { }
  signup:FormGroup|any;
  signuser:any;

  selectedValue: any;
  
  professions: any[] = [
    {value: 'Web design'},
    {value: 'App developer', viewValue: 'App developer'},
    {value: 'Testing', viewValue: 'Testing'},
    {value: 'React developer', viewValue: 'React developer'},
    {value: 'Mean Stack', viewValue: 'Mean Stack'},
    
  ];


  ngOnInit(): void {
    this.signup = this.formBuilder.group({
      'fname':['',Validators.required],
      'lname':['',Validators.required],
      'email':['',Validators.required],
      'profession':['',Validators.required],
      'phone':['',Validators.required],
      'password': ['',Validators.required],

    })
  }
  signupdata(signup:FormGroup){
    
    this.signuser = this.signup.value.fname
    this._http.post<any>("http://localhost:3000/signup", this.signup.value)
    .subscribe(res=>{
      alert('data added successfully');
      this.signup.reset();
      this._route.navigate(['login']);
    }, err=>{
      alert('Somthing went wrong');
    })
 
  }
  
}
