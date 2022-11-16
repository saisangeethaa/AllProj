import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  lgnFrm= new FormGroup({
  userName: new FormControl('',[Validators.required]),
  pwd: new FormControl('',[Validators.required]),

  })
userInvalid:boolean= false;
  constructor(private rut:Router) { }

  ngOnInit(): void {
  }
  login(){
    console.log(this.lgnFrm.value)
    if(this.lgnFrm.controls.userName.value != 'admin' || this.lgnFrm.controls.pwd.value != 'test123$' ){
      this.userInvalid=true;
  }
  else{
    this.userInvalid= false;
    this.lgnFrm.reset();
    localStorage.setItem('userNm',this.lgnFrm.controls.userName.value);
    this.rut.navigateByUrl('/home');
    sessionStorage.setItem('userNmSession',this.lgnFrm.controls.userName.value)
  }
  }
}
