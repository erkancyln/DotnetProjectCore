import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { IndexListComponent } from './index-list/index-list.component';
import { AddIndexComponent } from './add-index/add-index.component';
import { IndexUpdateComponent } from './indexupdate/indexupdate.component';
import { IndexesService } from './indexes.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexListComponent,
    AddIndexComponent,
    IndexUpdateComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [IndexesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
