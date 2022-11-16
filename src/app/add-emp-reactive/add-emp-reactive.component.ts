import { EmpployeeService } from './../empployee.service';
import { employee } from './../model/employee';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { gtr10 } from '../shared/customValidations/empValidations';
@Component({
  selector: 'app-add-emp-reactive',
  templateUrl: './add-emp-reactive.component.html',
  styleUrls: ['./add-emp-reactive.component.css']
})
export class AddEmpReactiveComponent implements OnInit {

  constructor(private emSv: EmpployeeService) { }
  empDetail:employee | undefined;
  cntryList: any =[
    {

      cntryCode:'blk',
    cntryVal: ''
  },

    {

      cntryCode: 'IND',
    cntryVal: 'India'
  },
  {

    cntryCode: 'USA',
    cntryVal: 'United States Of America'
  },

  {

    cntryCode: 'Eng',
    cntryVal: 'England'
  },
  {

    cntryCode: 'Aus',
    cntryVal: 'Australia'
  },


  ]
  empFrm: FormGroup = new FormGroup(
    {
      empID: new FormControl(),
      nm: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),
      address: new FormControl('',[Validators.minLength(10), Validators.maxLength(15)]),
      doj: new FormControl(),
      cnt: new FormControl('',[ gtr10 ]),
      city: new FormControl(),      
      email: new FormControl('',[Validators.email]),
      country: new FormControl('',[Validators.required])
    }
  );

  ngOnInit(): void {
    let userName = localStorage.getItem('userNm'); 
  //console.log(userName);  
  
  console.log(`user name before editing ${userName}`);
  localStorage.setItem('userName','admin2')
   userName = localStorage.getItem('userNm'); 
  console.log(`user name after editing ${userName}`);
  console.log(this.emSv.userId)
  }

  AddEmp() {

    if(this.empFrm.valid==false){
      this.empFrm.markAllAsTouched();
      return;
    }
    else{
      //add data to the database
      console.log(this.empFrm.value)
      this.empDetail=this.empFrm.value;
    }
    console.log(this.empFrm.value)
    this.empDetail = this.empFrm.value;

  }
editEmp(){
 this.empFrm.setValue({
   empID:'114',
  nm:'Sangeetha',
  address: 'main road,Adayar',
  doj: '10-11-2014',
  cnt:9834567993,
  city:'chn',
  email:'test@gmail.com'
 })
//  this.empFrm.patchValue({
//    nm:'Sangeetha',
//   address: 'main road,Adayar',
//   doj: '10-11-2014',
//    city:'Chennai',
//    email:'test@gmail.com'
//    })
}
cntryVal(){
console.log(this.empFrm.controls['country'].value)
let countrySelVal = this.empFrm.controls['country'].value;
if (countrySelVal !=''){
  this.empFrm.controls['city'].setValidators(Validators.required);
  this.empFrm.controls ['city'].updateValueAndValidity();
}
else{

  this.empFrm.controls['city'].clearValidators();
  this.empFrm.controls ['city'].updateValueAndValidity();
  //this.empFrm.controls ['city'].reset();
}

}

}
