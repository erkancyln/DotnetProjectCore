import { Component, OnInit, ViewChild } from '@angular/core';
import { AddIndexComponent } from '../add-index/add-index.component';
import { IndexesService } from '../indexes.service';
import { Index } from '../index';
import { Router } from '@angular/router';
import { IndexUpdateComponent } from '../indexupdate/indexupdate.component';
@Component({
  selector: 'app-index-list',
  templateUrl: './index-list.component.html',
  styleUrls: ['./index-list.component.sass']
})
export class IndexListComponent implements OnInit {
  indlist: Index[];
  dataavailable: Boolean = false;
  tempind: Index

  constructor(private dataservice: IndexesService, private route: Router) { }
  ngOnInit() {
    this.LoadData();
  }
  LoadData() {

    this.dataservice.getIndex().subscribe((template) => {
      this.indlist = template;
      console.log(this.indlist);
      if (this.indlist.length > 0) {
        this.dataavailable = true;
      }
      else {
        this.dataavailable = false;
      }


    }
    )
      , err => {
        console.log(err);
      }
  }
  deleteconfirmation(id: string) {

    if (confirm("Are you sure you want to delete this ?")) {
      this.tempind = new Index();
      this.tempind.id = id;
      this.dataservice.DeleteIndex(this.tempind).subscribe(res => {
        alert("Deleted successfully !!!");
        this.LoadData();
      })
    }
  }
  @ViewChild('indadd') addcomponent: AddIndexComponent
  @ViewChild('regForm') editcomponent: IndexUpdateComponent



  loadAddnew() {

    
    this.addcomponent.objind.message = ""
    this.addcomponent.objind.createDate = ""
    this.addcomponent.objind.id = ""
    this.addcomponent.objind.logType = 0
  }

  loadnewForm(id: string,message: string, createDate: string, logType: number) {
    console.log(logType);
    this.editcomponent.objind.message = message
    this.editcomponent.objind.createDate = createDate
    this.editcomponent.objind.id = id
    this.editcomponent.objind.logType = logType

  }

  RefreshData() {
    this.LoadData();
  }
}
