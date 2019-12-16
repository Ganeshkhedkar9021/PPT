import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
declare var $:any;
declare var jQuery:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userInfo:any={};
  compRef:any;
  activeTab:any = true;
  constructor(private router:Router) { }

  ngOnInit() {
    
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log("this is logged user information",this.userInfo)
    this.menuClicked();
  //  userInfo
  }
  ngAfterViewInit(): void {
    console.log("View Init");
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.menuClicked();
  }

  menuClicked(){
    $(".sidebar-dropdown > a").click(function() {
      $(".sidebar-submenu").slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
       // alert("else condition");
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }
    });
  }

  logout(){
    this.router.navigate(['/']);
   // alert("this is logout");
  }

  onActivate(componentRef){
    //componentRef.works();
    this.compRef = componentRef;

    var compName = this.compRef.constructor.name;
    if(compName=="WellsListComponent"){
      this.activeTab = "wellTab";
    }
    else if(compName=="TallyListComponent"){
      this.activeTab = "tallyTab";
    }
    else if(compName=="OperationcodesComponent"){
      this.activeTab = "operationCodeTab";
    }
    else if(compName=="OperationcomponentsComponent"){
      this.activeTab = "operationCompTab";
    }
    else if(compName=="EquipmentsComponent"){
      this.activeTab = "equipmentTab";
    }
    else if(compName=="OldReportComponent"){
      this.activeTab = "oldReportTab";
    }
    else if(compName=="ReportsListComponent"||compName=="ReportDetailsComponent"||compName=="FillReportComponent"){
      this.activeTab = "dreportTab";
    }
    else if(compName=="CrewsMasterListComponent"||compName=="CrewsListComponent"||compName=="PositionsComponent"){
      this.activeTab = "masterTab";
    }
    else{
      this.activeTab = "dreportTab";
    }
    console.log("This is on activate method");
    console.log("componentRef:",this.compRef.constructor.name);
   // this.gotoWellList();
  }

  gotoWellList(){
    // console.log("gotoWellList",this.compRef);
    // console.log("Get Name",this.compRef.constructor.name);
    var compName = this.compRef.constructor.name;
    if(compName=="WellsListComponent"){
      this.compRef.getwells();
    }else{
      this.router.navigate(['/ddrswms/wells']);
    }
  }
  gotoEquipmentList(){
    var compName = this.compRef.constructor.name;
    if(compName=="EquipmentsComponent"){
      this.compRef.getEquipments();
    }else{
      this.router.navigate(['/ddrswms/equipments']);
    }
  }

  gotoTallyList(){
    var compName = this.compRef.constructor.name;
    if(compName=="TallyListComponent"){
      this.compRef.getTallySheets();
    }else{
      this.router.navigate(['/ddrswms/tally-sheet']);
    }
  }
}
