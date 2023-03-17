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

  constructor(private advice:AdviceService){}

  ngOnInit(){
    this.advice.getAdvices().subscribe(data =>{
      this.advices=data;
      console.log(this.advices);
      console.log(this.advices.slip.id);
      console.log(this.advices.slip.advice);
      this.adviceID=`ADVICE #${this.advices.slip.id}`;
      this.adviceQuote=`"${this.advices.slip.advice}"`;
    })
  }

  randomizeQuote(){
    this.advice.getAdvices().subscribe(data =>{
      this.advices=data;
      this.adviceID=`ADVICE #${this.advices.slip.id}`;
      this.adviceQuote=`"${this.advices.slip.advice}"`;
    })
  }
}
