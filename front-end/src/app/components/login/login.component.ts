import { Component, OnInit } from '@angular/core';
import { Router ,NavigationStart,NavigationEnd,NavigationCancel} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginService} from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInfo:any={};
  loginForm: FormGroup;
  submitted = false;

  constructor(private router: Router,private loginservice: LoginService,private toastr: ToastrService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }

  login(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }else
    {
      this.loginInfo.dbId = 1;
      this.loginservice.login(this.loginInfo).subscribe(data=>{
        //console.log(data.error);
        if(!data.error){
         // console.log("if conditions",data.result[0]);
         // console.log("this is token",data.token);
          localStorage.setItem('userInfo', JSON.stringify(data.result[0]));
          localStorage.setItem('isLogin', 'true');
          localStorage.setItem('token', data.token);
          
          //localStorage.setItem('isLogin', 'true');
         //   this.toastr.success(data.message, 'Success!');
         if(data.result[0].role==0){
          this.router.navigate(['/ddrswms/reports']);
         }else{
          this.router.navigate(['/ddrswms/wells']);
         }
         
        }
        else{
            this.toastr.error(data.message, 'Fail!', {
            positionClass: 'toast-top-center' 
        });
        }
      },
      error=>{
        alert("something wrong");
      })
    }
  }
}
