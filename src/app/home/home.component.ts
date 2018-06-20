import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Rx';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //const myNumber = Observable.interval(1000); //build in observables
   // myNumber.subscribe(
    //  (number:number) => {console.log(number)}
    //)
  const myobser = Observable.create((
    observer: Observer<string>) =>{
     
      setTimeout(() =>{observer.next('firstpacakage')},2000);
      setTimeout(() =>{observer.next('secondpacakage')},4000);
      setTimeout(() =>{observer.error('not excuted')},5000);
    });
    myobser.subscribe(
      (data: string)=>{ console.log(data)},
      (error: string) => { console.log(error)},
      ()=> {console.log('completed')}
    )

  }
}
