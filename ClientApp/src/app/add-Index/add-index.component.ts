import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IndexesService } from '../indexes.service';
import { Index } from "../index";
@Component({
  selector: 'app-add-index',
  templateUrl: './add-index.component.html',
  styleUrls: ['./add-index.component.sass']
})
export class AddIndexComponent implements OnInit {

  @Input() cleardata: boolean = false;
  @Output() nameEvent = new EventEmitter<string>();
  objtempind: Index;
  @Input() objind: Index = new Index();;
  @ViewChild('closeBtn') cb: ElementRef;
  constructor(private dataservice: IndexesService, private route: Router) {

  }

  ngOnInit() {
    //this.ResetValues();
  }

  ResetValues() {


  }




  Register(regForm: NgForm) {

    this.objtempind = new Index();
    this.objtempind.message = regForm.value.message;
    this.objtempind.createDate = regForm.value.createDate;
    this.objtempind.logType = regForm.value.logType;

    this.dataservice.addIndex(this.objtempind).subscribe(res => {
      alert("Index Added successfully");
      this.nameEvent.emit("ccc");
      this.cb.nativeElement.click();
      this.route.navigateByUrl('');
    })
  }
}
