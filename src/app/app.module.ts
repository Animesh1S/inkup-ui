import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { InsertdataComponent } from './insertdata/insertdata.component';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ViewdataComponent } from './viewdata/viewdata.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertdataComponent,
    ViewdataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
