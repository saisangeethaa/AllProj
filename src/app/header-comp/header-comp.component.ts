import { Component, Input, OnInit } from '@angular/core';
import { navItems } from '../model/nav';
@Component({
  selector: 'app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.css']
})
export class HeaderCompComponent implements OnInit {

  constructor() { }
  @Input() nvLst:navItems[]=[
{
navNm:'Home',
path:'/home'

},
{
  navNm:'Add Emp Reactive',
  path:'/add-employee-react'
  
  },
  {
    navNm:'Services',
    path:'/services/200'
    
    },
{
  navNm:'Add Emp',
  path:'/add-employee'
  
  },
  
  
      {
        navNm:'Login',
        path:'/login'
        
        },
        {
          navNm:'View Products',
          path:'/viewproducts'
          
          },
          {
            navNm:'Employee Details',
            path:'/emp-Dtl'
            
            },
            {
              navNm:'Add Products',
              path:'/add-product'
              
              }
  
];


  ngOnInit(): void {
  }

}
