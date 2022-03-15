import { Component, OnInit } from '@angular/core';
import { Observable, of, range, from, fromEvent, filter, interval } from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {map, catchError} from 'rxjs/operators';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

//Vairable declaration
  numbers: number[]=[];
  sum: number=0;

// Using filter operator
filteredNumbers : number[] = [];
filtered: number=0;
              
// Using map operator
summap: number=0;
mappedNumbers : number[] = [];

// Using Ajax
apiMessage: any;

// fromEvent
counter: number=0;

  constructor() { }

  ngOnInit(): void {

   const observable = new Observable(subscriber => 
      {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();}, 1000);});

        console.log('just before subscribe');
        observable.subscribe({
        next(x) {console.log('got value '+ x);},
        error(err) {console.log('something wrong occoured: '+ err);},
        complete() {console.log('done');
      }
      });
      console.log('just after subcribe');
      
    const numbers$ = of (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    //const numbers$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    //const numbers$ = range(1, 10);

    // observer
    const observer = {
      next: (num: number) => {this.numbers.push(num); this.sum += num },
      error: (err: any) => console.log(err),
      complete: () => console.log("Observation completed!")
     };
    //subscribing
    numbers$.subscribe(observer);

    //Using the filter operation
    const filterFn = filter( (num : number) => num > 5 );
    const filteredNumbers$ = filterFn(numbers$);
    filteredNumbers$.subscribe( (num : number) => {
    this.filteredNumbers.push(num); this.filtered += num } );

    //Using the map operation
   const mapFnc = map( (num : number) => num + num );
    const mappedNumbers$ = numbers$.pipe(filterFn, mapFnc);
    mappedNumbers$.subscribe( (num : number) => {this.mappedNumbers.push(num); this.summap += num } );

    //Using Ajax
    const api$ = ajax({
    url: 'https://httpbin.org/delay/1',
    method: 'POST',
    headers: {'Content-Type': 'application/text' },
     body: "Hello"
});
  //Subsribe to api
  api$.subscribe(res => this.apiMessage = res.request.body );

  //Using fromEvent
  const clickEvent$ = fromEvent (document, 'click');
  clickEvent$.subscribe( () => this.counter++ );

    const interval$ = interval(1000);
    interval$.subscribe(val => console.log('stream 1 ' + val));
    const click$ = fromEvent(document,'click');
    click$.subscribe(evt => console.log('Mouse Clicked' + evt));

    console.log('just before subscribe');
      observable.subscribe({
        next(x) {console.log('got value '+ x);},
        error(err) {console.log('something wrong occoured: '+ err);},
        complete() {console.log('done');}
      }) ;
      console.log('just after subcribe');

  }

}
