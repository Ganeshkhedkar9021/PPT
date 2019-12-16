import { BrowserModule } from '@angular/platform-browser';
//C:\Program Files\Java\jdk-12.0.1\bin
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import {LoginService} from './services/login.service';
import  {AuthguardService as AuthGuard } from './services/authguard.service';
import { WellsListComponent } from './components/wells/wells-list/wells-list.component';
import { CreateWellComponent } from './components/wells/create-well/create-well.component';
import { CheckstatusDirective } from './directives/checkstatus.directive';

import { SearchPipe } from './pipes/search.pipe';


import {ExcelService} from './services/excel.service';
import {FileSelectDirective} from "ng2-file-upload";

import { NgHttpLoaderModule } from 'ng-http-loader';


//New Added

import { FixdigitPipe } from './pipes/fixdigit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    WellsListComponent,
    CreateWellComponent,
    CheckstatusDirective,
   
    SearchPipe,
    
    FileSelectDirective, 

    FixdigitPipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgHttpLoaderModule.forRoot(),
    NgxPaginationModule,
    ToastrModule.forRoot(),
    CommonModule,

    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [LoginService,AuthGuard,DatePipe,ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
