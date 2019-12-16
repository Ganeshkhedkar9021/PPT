import { Injectable } from '@angular/core';
import {Router,CanActivate} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {
    var isLogin = localStorage.getItem('isLogin');
    console.log("this is auth gaurd service",isLogin);
    if (!isLogin) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
