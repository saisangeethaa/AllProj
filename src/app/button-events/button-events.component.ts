import { Component, OnInit } from '@angular/core';
import { studentCls } from '../student';
import { student } from '../studentMdl';


@Component({
  selector: 'app-button-events',
  templateUrl: './button-events.component.html',
  styleUrls: ['./button-events.component.css']
})
export class ButtonEventsComponent implements OnInit {public title: string = "Created my first component in Angular";
public showStuDt: boolean = true;
isDisabled: boolean = false;
userType: string = 'Teacher';
imgNm: string = "logo-nav@2x.png";


public studentList: student[] = [
  {
    rollNo: 101,
    name: 'sai',
    class: '6th',
    section: 'C',
    age: 12,
    cnt: 173132912
  },
  {
    rollNo: 102,
    name: 'Reema',
    class: '9th',
    section: 'C',
    age: 12,
    cnt: 173132912
  },
  {
    rollNo: 103,
    name: 'Salu',
    class: '4th',
    section: 'C',
    age: 12,
    cnt: 173132912
  },
  {
    rollNo: 105,
    name: 'Madhu',
    class: '5th',
    section: 'C',
    age: 12,
    cnt: 173132912
  },
  {
    rollNo: 106,
    name: 'Jese',
    class: '6th',
    section: 'C',
    age: 12,
    cnt: 173132912
  },
  {
    rollNo: 101,
    name: 'Ram',
    class: '4th',
    section: 'C',
    age: 12,
    cnt: 173132912
  },
  {
    rollNo: 102,
    name: 'Rani',
    class: '4th',
    section: 'C',
    age: 12,
    cnt: 173132912
  },
  {
    rollNo: 103,
    name: 'Jeeva',
    class: '4th',
    section: 'C',
    age: 12,
    cnt: 173132912
  }
]

public stuList: studentCls[] = [

  {
    rollNo: 100,
    name: 'Priya',
    class: '4th',
    section: 'C',
    age: 12,
    cnt: 173132912
  },
  {
    rollNo: 101,
    name: 'Rahul',
    class: '4th',
    section: 'C',
    age: 12,
    cnt: 173132912
  },


]
public subjects: string[] = ['Art', 'Music', 'Tamil', 'computer', 'Hindi']


  constructor() { }

  ngOnInit(): void {
    
  }

}
