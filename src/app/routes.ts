import { RouterModule, Routes} from '@angular/router';
import { ButtonEventsComponent } from './button-events/button-events.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

  export const urlroutes: Routes = [
    {
      path:'btn-events',
      component: ButtonEventsComponent
    },
    {
      path:'services',
      component: ButtonEventsComponent
    },
    {
      path:'myshop',
      component: HomeComponent
    },
    {
      path:'**',
      component: PageNotFoundComponent
    }, 
    
  ];