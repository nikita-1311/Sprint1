import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  constructor(private loginAuth:AppService, private router:Router) { }

  ngOnInit(): void {
  }
loginForm=new FormGroup(
  {
    Name:new FormControl('',[Validators.required]),
    pwd:new FormControl('',[Validators.required])
  }
);
isUserValid:boolean=false;
loginSubmited(){
  this.loginAuth.loginUser([this.loginForm.value.Name, this.loginForm.value.pwd])
  .subscribe((res)=>{
    if(res=='Failure')
    {
      this.isUserValid=false;
      alert('Login Succesfull');
    }
    else
    {
      this.isUserValid=true;
      //this.loginAuth.setToken(res);
      this.router.navigateByUrl('users');
    }
  });
}
 get Name():FormControl{
  return this.loginForm.get('Name') as FormControl;
 }
  get pwd():FormControl{
    return this.loginForm.get('pwd') as FormControl;
 }
}

