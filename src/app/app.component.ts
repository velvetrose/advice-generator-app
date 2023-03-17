import { Component } from '@angular/core';
import { AdviceService } from './advice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'advice-generator-app-main';
  advices:any;
  adviceID!:string;
  adviceQuote!:string;
  isLoading!:boolean;
  randomizeButton!:boolean;

  constructor(private advice:AdviceService){}

  ngOnInit(){
    this.isLoading=true;
    this.randomizeButton=false;

    this.advice.getAdvices().subscribe(data =>{
      this.advices=data;
      console.log(this.advices);
      console.log(this.advices.slip.id);
      console.log(this.advices.slip.advice);
      this.isLoading=false;
      this.randomizeButton=true;
      this.adviceID=`ADVICE #${this.advices.slip.id}`;
      this.adviceQuote=`"${this.advices.slip.advice}"`;
    })
  }

  randomizeQuote(){
    this.isLoading=true;
    this.randomizeButton=false;
    this.advice.getAdvices().subscribe(data =>{
      this.advices=data;
      this.isLoading=false;
      this.randomizeButton=true;
      this.adviceID=`ADVICE #${this.advices.slip.id}`;
      this.adviceQuote=`"${this.advices.slip.advice}"`;
    })
  }
}
