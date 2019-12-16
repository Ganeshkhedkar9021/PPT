import { Directive, ElementRef,HostListener, Input,AfterViewInit,OnInit,HostBinding } from '@angular/core';

@Directive({
  selector: '[appCheckstatus]'
})
export class CheckstatusDirective  {

  @HostBinding('class')
  elementClass = '';

  constructor(private ele:ElementRef) { 
    //ele.nativeElement.style.backgroundColor = 'yellow';
  }
  @Input('status') status: string;
  ngOnInit(){
    if(this.status=='1'){
      // this.ele.nativeElement.style.color = 'green'; 
      this.elementClass = 'badge badge-success p-2 font-weight-normal'
    }
     else{
      // this.ele.nativeElement.style.color = 'red'; 
      this.elementClass = 'badge badge-danger p-2 font-weight-normal'
    }
  }
}
