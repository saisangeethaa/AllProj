import { EmpployeeService } from './../empployee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  constructor(private empSrv:EmpployeeService) { }

  ngOnInit(): void {
    let userName = localStorage.getItem('userNm'); 
    //console.log(userName);  
    console.log(`user name is ${userName}`);
    console.log(this.empSrv.userId)
  }
  addEmp(frmData: { value: any; }){
    console.log(frmData.value)

  }

}
