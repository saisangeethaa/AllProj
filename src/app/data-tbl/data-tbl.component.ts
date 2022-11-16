import { employee } from './../model/employee';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-tbl',
  templateUrl: './data-tbl.component.html',
  styleUrls: ['./data-tbl.component.css']
})
export class DataTblComponent implements OnInit {

  constructor() { }

   @Input() tblDtls:employee[]=[];
    
          
    
  //@Input() tblDtls:employee[]=[];
    @Output() counterValue:EventEmitter<any> =  new EventEmitter();
counter:number=10;

 @Output() empIDchange:EventEmitter<number> = new EventEmitter();


  ngOnInit(): void {
     
}
incrementCount(){
this.counter = this.counter + 1;
this.counterValue.emit(`updated counter ${this.counter}`);
}
delEmp(eID: number){
  console.log(eID); 
   this.empIDchange.emit(eID);
}
}