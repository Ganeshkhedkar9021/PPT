import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AppComponent} from './app.component';
import { HeaderComponent } from './components/header/header.component';
import  {AuthguardService as AuthGuard } from './services/authguard.service';
import { WellsListComponent } from './components/wells/wells-list/wells-list.component';
import { CreateWellComponent } from './components/wells/create-well/create-well.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  {
    path: 'ddrswms', component: HeaderComponent, canActivate: [AuthGuard],
    children: [{
      path: '', component: WellsListComponent,
    },
    // {
    //   path:'home',
    //   loadChildren:'src/app/components/reports/reports.module#ReportsModule'
    // },
    // {
    //   path:'dailyreports',
    //   loadChildren:'src/app/components/dailyreports/reports.module#ReportsModule'
    // },

    {
      path: 'create-well', component: CreateWellComponent,
    },
    {
      path: 'create-well/:id', component: CreateWellComponent,
    },
    {
      path: 'wells', component: WellsListComponent,
    }
   ]
  }
  ];
 




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
