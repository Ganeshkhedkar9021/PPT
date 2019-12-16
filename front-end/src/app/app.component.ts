import { Component ,OnInit} from '@angular/core';
import { MasterService } from './master.service';
import { Router ,NavigationStart,NavigationEnd,NavigationCancel} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'front-end';
  loading;
  currenturl:any=""
  constructor(private masterservice:MasterService,private router: Router){

    this.loading = true;




   // this.masterservice.getUrl()
   // router.events.subscribe((url:any) => console.log(url));
      //console.log(router.url);  // to print only path eg:"/login"
  //  console.log();
  // alert(router.url)

  }
  ngOnInit(): void {
    this.masterservice.getUrl()
  }

/*



*/

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.router.events
    .subscribe((event) => {
        if(event instanceof NavigationStart) {
            this.loading = true;
        }
        else if (
            event instanceof NavigationEnd || 
            event instanceof NavigationCancel
            ) {
            this.loading = false;
        }
    });
  }
  
}
