import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestingProj';
 navigationLstValues:any[]=[


  
    {
    navNm:'Home',
    pathVal:'/home'
    
    },
    
      {
        navNm:'Services',
        pathVal:'/services/200'
        
        },
        {
          navNm:'View Products',
          pathVal:'viewproducts'

        },
        
          {
            navNm:'Contact Us',
            pathVal:'/contact'
            
            }
      
    
 ];
 

}
