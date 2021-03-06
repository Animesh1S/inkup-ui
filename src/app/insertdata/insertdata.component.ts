import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-insertdata',
  templateUrl: './insertdata.component.html',
  styleUrls: ['./insertdata.component.css']
})
export class InsertdataComponent implements OnInit {
  
  name:any=""
  location:any=""
  jsonstring:any="";
  response: any="";

  ip = "http://ink-up-api.herokuapp.com/inkup/"
  getDataUrl =  this.ip + 'getData';
  getDataAllUrl = this.ip + 'getDataAll';
  insertDataUrl = this.ip + 'insertData';
  constructor(private http:HttpClient) { }

  ngOnInit() {

    console.log("Insert Component..");
  }

  insertData() {
      this.jsonstring = {
      'name': this.name,
      'location': this.location};

    console.log(this.jsonstring);
     this.http.put(this.insertDataUrl, this.jsonstring,
      {headers : {'Content-Type' : 'application/json'}}).subscribe(
        data => {
          this.response = data;
          console.log(this.response);
        },
        error =>{
          console.log("error");
        }
      );
  }

}
