import { Observable } from 'rxjs';
import { employee } from './model/employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpployeeService {

  constructor( private http:HttpClient) { }
  apiURL="https://gorest.co.in/public/v2/users";  
  public userId="101";
  public userType = localStorage.getItem('userType');
  empData:employee[]=[
    {
    empID:501, 
    fullName: 'Sai',
    address:'Chennai',
    cnt:349754321,
    doj:'14-08-2017',
    email:'sai@gmail.com',
    
    },
    {
      empID:502,
    fullName: 'SaiSangee',
    address:'Chennai',
    cnt:349754322,
    doj:'14-08-2017',
    email:'padma@gmail.com', 
      },
      {
        empID:503,
    fullName: 'Sai',
    address:'Goa',
    cnt:349754323,
    doj:'14-08-2017',
    email:'uma@gmail.com',  
        },
        {
          empID:504,
    fullName: 'Saran',
    address:'Bangalore',
    cnt:349754324,
    doj:'14-08-2018',
    email:'saran@gmail.com',   
          },
          {
            empID:505,
    fullName: 'Sangee', 
    address:'Pune',
    cnt:349754325,
    doj:'14-08-2019',
    email:'kalai@gmail.com',    
            },
    ];
  getAllEmployees():employee[]{

    return this.empData;
  }
  isUserAdmin():boolean{
    if (this.userType== 'admin'){
      return true;
    } 
    return false;
  }
  //adding value to the header --->Http headers
  getAllUsers():Observable<any>{
 const custHeaders = {'content-type':'application/json'}
 //addding value to Http url ---->http parameters
 const prms= {'userID':'2'};

//return this.http.get(this.apiURL,{headers:custHeaders,observe:'body'});
return this.http.post(this.apiURL,'test',{headers:custHeaders,observe:'body'});
  }
} 
   