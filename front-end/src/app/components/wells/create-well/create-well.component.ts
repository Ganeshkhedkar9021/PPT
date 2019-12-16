import { Component, OnInit } from '@angular/core';
import { MastersService } from '../../../services/masters.service'
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-well',
  templateUrl: './create-well.component.html',
  styleUrls: ['./create-well.component.css']
})
export class CreateWellComponent implements OnInit {
  wellInfo: any = {};
  wellForm: FormGroup;
  submitted = false;
  wellId: any = "";
  isView: boolean = false;
  todatevalid:any="";


  constructor(private mastersservice: MastersService, private activeroute: ActivatedRoute, private router: Router, private toastr: ToastrService, private formBuilder: FormBuilder) { 
   
  }
  
 
 
  ngOnInit() {
    let today=new Date();
      
    this.todatevalid = today.toISOString().slice(0,10);


    this.wellId = this.activeroute.snapshot.paramMap.get('id');
    console.log("paramenter", this.wellId);
    //   this.activeroute.params.subscribe(
    //     params => {
    //       this.wellId = params.id;
    //       console.log("paramenter ID", this.wellId);
    //     }
    // );

    if (this.wellId != null) {
      this.getWellInformation();
    }

    this.wellInfo.well_date = new Date();
    this.wellInfo.spud_date = new Date();
    this.wellForm = this.formBuilder.group({
      lease: ['', Validators.required],
      well_no: ['', Validators.required],
      rig_no: ['', Validators.required],
      operator: ['', Validators.required],
      contractor: ['', Validators.required],
      well_date: ['', Validators.required],
      spud_date: ['', Validators.required],
      final_remark: ['', '']
    });
    //console.log("Add Time WellInfo:",this.wellInfo.status);
  }

 


  get f() { return this.wellForm.controls; }
  createWell() {
    this.submitted = true;
    if (this.wellForm.invalid) {
      return;
    }
    else {

      console.log("Well Information", this.wellInfo);

      this.mastersservice.createWell(this.wellInfo).subscribe(data => {
        if (!data.error) {
          this.toastr.success(data.message, 'Success!');
          this.router.navigate(['ddrswms/wells'])
        }
      },
        error => {
        });
    }
  }

  getWellInformation() {
    this.mastersservice.getWellInfo(this.wellId).subscribe(data => {
      if (!data.error) {
        this.wellInfo = data.result;
        this.wellInfo.well_date = new Date(data.result.well_date);
        this.wellInfo.spud_date = new Date(data.result.spud_date);
        console.log("Complete well info", this.wellInfo.final_remark);
      }
    })
  }

  dateChange(event) {
    this.wellInfo.well_date = new Date(event)
    console.log("datechange 1", this.wellInfo.well_date)
  }

  dateChange2(event) {
    this.wellInfo.spud_date = new Date(event)
    console.log("datechange 2", this.wellInfo.spud_date)
  }



}
