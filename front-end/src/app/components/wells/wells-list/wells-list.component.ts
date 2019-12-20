import { Component, OnInit } from '@angular/core';
import { MastersService } from '../../../services/masters.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//private masterservice:MasterService
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-wells-list',
  templateUrl: './wells-list.component.html',
  styleUrls: ['./wells-list.component.css'],
  providers: [DatePipe]
})
export class WellsListComponent implements OnInit {

  //modelForm: FormGroup;
  submitted = false;
  modalTitle: string = "Remark";
  modalButtonTitle: string = "Add Remark";
  ppts: any = [];
  activeWell: any = [];
  isActiveWell: boolean = true;
  pageSize: number = 10;
  remark: string;
  wellId: any = null;
  isView: boolean = false;

  viewWellInfo: any = {};




  constructor(private masterservice: MastersService, private datePipe: DatePipe, private toastr: ToastrService, private router: Router) { }
  ngOnInit() {
    //window.location.reload();
    this.getwells();
    this.getActiveWell();
  }

  getActiveWell() {
    this.isView = false;
    this.masterservice.getactivewell().subscribe(data => {
      this.activeWell = data.result;
      if (this.activeWell != null) {
        this.isActiveWell = true;
        console.log(" if condition active well count", data.result);
      }
      else {
        this.isActiveWell = false;
        console.log(" else condition active well count", data.result);
      }
    },
      error => {
        console.log("well have errors");
      }
    );
  }

  getwells() {
    this.isView = false;
    this.masterservice.getwells().subscribe(data => {
      this.ppts = data.result;
      console.log(" this.ppts",  this.ppts);
    },
      error => {
        console.log("well have errors");
      }
    );
  }
  createmodel(wid) {




    this.wellId = wid;
    this.modalTitle = "Remark";
    this.modalButtonTitle = "Add Remark";
    this.submitted = false;
    $("#myModal").modal('show');
  }

  reset() {
    // this.modelForm.reset();
  }

  endWell() {
    //  alert(this.remark);
    let wellInfo = {
      'wellId': this.wellId,
      'final_remark': this.remark,
      'well_end_date': new Date()
    }
    console.log("well Information", wellInfo)
    this.masterservice.endWell(wellInfo).subscribe(data => {
      this.toastr.success(data.message, 'Success!');
      this.getwells();
      this.getActiveWell();
      $("#myModal").modal('hide');
      this.wellId = null;
      this.remark = "";
      this.router.navigate(['ddrswms/wells'])

    },
      error => {
        console.log("well have errors");
      }
    )
  }


  deletePpt()
  {
    
  }

  viewWell(WellInfo) {

    this.isView = true;
    this.viewWellInfo = WellInfo
  }

  goback() {
    this.isView = false;
    // this.isEquList = true;
    this.submitted = false;

  }


}
