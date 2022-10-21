import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { UsersComponent } from './users/users.component';
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  //setToken:string|any;
  constructor(private http : HttpClient) {}
  baseServerUrl='https:localhost:44358/api/';
  // registerUser(user:Array<any>){
  //   return this.http.post(
  //     this.baseServerUrl+'loginUser',
  //     {
  //       AId:user[0],
  //       Name:user[1],
  //       Mobile:user[2],
  //       OId:user[3],
  //       Status:user[4],
  //       Password:user[5]
  //     },
  //     {
  //       responseType:'text',
  //     }
  //   );
  // }

  loginUser(loginInfo:Array<any>){
    return this.http.post(this.baseServerUrl+'Admin/loginUser',
    {
      Name:loginInfo[0],
      Password:loginInfo[1]
    },
    {
      responseType:'text',
    }
    );
  }
}
