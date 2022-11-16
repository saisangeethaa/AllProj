import { EmpployeeService } from './empployee.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(private empSrv:EmpployeeService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      console.log("message from user Auth guard")
      console.log(route.url);
     // let user = localStorage.getItem('userType');

      let isUserAdmin:boolean=this.empSrv.isUserAdmin();
      if(isUserAdmin == true){
        return true;
      }
      else {
        window.alert("You are not authorized to access this section")
      
    return false;
  }
  
    }  
    //isUserAdmin(): boolean {
   // throw new Error('Method not implemented.');
  //}
}
