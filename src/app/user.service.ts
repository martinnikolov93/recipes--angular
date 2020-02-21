import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private appKey: string = 'kid_r1Pn8XhsB';
  private appSecret:string = '1863a9ec03cc47a99cf6d4912a7e6ff1';

  constructor(private http: HttpClient) { }

  register({ username, password }){
    let url = "https://baas.kinvey.com/user/kid_r1Pn8XhsB"; 
    let data = { username, password };
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Basic ${btoa(`${this.appKey}:${this.appSecret}`)}`
      })
    };

    return this.http.post(url, data ,httpOptions);
  }

  login({ username, password }){
    let url = "https://baas.kinvey.com/user/kid_r1Pn8XhsB/login"; 
    let data = { username, password };
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Basic ${btoa(`${this.appKey}:${this.appSecret}`)}`
      })
    };

    return this.http.post(url, data, httpOptions);
  }
}
