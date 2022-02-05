import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  appName = 'This printout is an example of striing interpolation using one-way binding';

  headerA = 'ONE-WAY BINDING';

  // NUMERIC BINDING
  header1 = 'Numerical Interpolation';
  n1 = 50;
  n2 = 25;
  sum = 0;
  diff = 0;
  qou = 0;
  prod = 0;
  
  // PRODUCT BINDING
  header2 = 'Product Binding';
  clientName:string = "Larren";

  

  //STYLE BINDING
  header3 = 'Style Binding';
  appliedCSSClass = "orange";
  notappliedCSSClass = true;
  myColor = "blue";

  //TWO-WAY BINDING

  headerB = 'TWO-WAY BINDING';
  TwoWay1 = 'Using keyup, keydown, blur, & mouse actions';

  showData($event:any){
    console.log("Button is clicked!");
  }
 //KEYUP FUNCTION
 TwoWay2 = 'KEYUP FUNCTION';
 getData(data:any){
   console.warn(data)
 }

 //KEYdown FUNCTION
 TwoWay3 = 'KEYDOWN FUNCTION';
 

 //KEYblur FUNCTION
 TwoWay4 = 'BLUR FUNCTION';
 

  //INPUT
  TwoWay5 = 'INPUT FUNCTION';
  




  constructor() { }

  ngOnInit(): void {
  }

}
