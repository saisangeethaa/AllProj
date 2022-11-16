import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import{ButtonEventsComponent} from './button-events/button-events.component';
import{HomeComponent} from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import{AddEmpReactiveComponent} from  './add-emp-reactive/add-emp-reactive.component';
import { FormsModule,ReactiveFormsModule, } from '@angular/forms';
import { UserAuthGuard } from './user-auth.guard';

const urlroutes: Routes = [
  {
    path:'home',
    component: FirstCompComponent
    
  },
  
  {
    path:'services/:sid',
    component: SecondCompComponent,
    canActivate:[UserAuthGuard]
  },
  
  {
    path:'products',
    component: SecondCompComponent
  },

  {
    path:'myshop/contact us',
    component: SecondCompComponent
  },

  {
    path:'viewproducts',
    component: ViewProductsComponent
  },
  {
    path:'add-employee',
    component: AddEmpComponent,
    canActivate:[UserAuthGuard]
  },
  {
    path:'add-employee-react',
    component: AddEmpReactiveComponent
  },
  {
    path:'add-product',
    component: AddProductComponent
  },
  {
    path:'emp-Dtl',
    component: EmpDetailsComponent
  },
  {
    path:'login',
    component: LoginComponent
  },


  {path:'',  
  redirectTo:'/home',
  pathMatch:'full'
  },

  {
    path:'**',
    component: PageNotFoundComponent
  }, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(urlroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
