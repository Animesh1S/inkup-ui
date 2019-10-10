import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InsertdataComponent } from './insertdata/insertdata.component';
import { ViewdataComponent } from './viewdata/viewdata.component';

const routes: Routes = [
  {path : '' , redirectTo : "/viewdata" , pathMatch : 'full' },
  {path: 'insert' ,component: InsertdataComponent},
{path: 'viewdata' ,component: ViewdataComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents =[InsertdataComponent, ViewdataComponent];
