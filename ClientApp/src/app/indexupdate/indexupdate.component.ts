import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { IndexesService } from '../indexes.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Index } from '../index';
@Component({
  selector: 'app-indexupdate',
  templateUrl: './indexupdate.component.html',
  styleUrls: ['./indexupdate.component.sass']
})
export class IndexUpdateComponent implements OnInit {

  constructor(private dataservice: IndexesService, private route: Router) {

  }
  @Output() nameEvent = new EventEmitter<string>();
  @ViewChild('closeBtn') cb: ElementRef;
  ngOnInit() {}
  @Input() reset: boolean = false;
  @ViewChild('regForm') myForm: NgForm;
  @Input() isReset: boolean = false;
  objtempind: Index;
  @Input() objind: Index = new Index();

  EditIndex(regForm: NgForm) {


    this.dataservice.EditIndex(this.objind).subscribe(res =>{
      alert("Index updated successfully");
      this.nameEvent.emit("ccc");
      this.cb.nativeElement.click();
    }
  )}
}
