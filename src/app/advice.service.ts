import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  constructor(private http: HttpClient) { }
  // getAdvices() {
  //   let adviseURL = "https://api.adviceslip.com/advice";
  //   return this.http.get(adviseURL);
  // }
  getAdvices() { 
    let adviseURL = "https://api.adviceslip.com/advice";
    return this.http.get(adviseURL); 
    }
}
