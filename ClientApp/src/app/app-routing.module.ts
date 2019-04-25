import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexListComponent } from './index-list/index-list.component';
import { IndexUpdateComponent } from './indexupdate/indexupdate.component';
import { AddIndexComponent } from './add-index/add-index.component';

const routes: Routes = [{ path: '', component: IndexListComponent},
  { path: 'Edit', component: IndexUpdateComponent},
  { path: 'Add', component: AddIndexComponent},
  { path: 'Home', component: IndexListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
