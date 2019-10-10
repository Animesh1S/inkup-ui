import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})

export class ViewdataComponent {
  title = 'ink-up-ui';
  response : any ='';
  jsonstring: any="";
  email_id: string = '';
  password: string = '';

//http://ink-up-api.herokuapp.com/inkup/getData
  ip = "http://ink-up-api.herokuapp.com/inkup/"
  getDataUrl =  this.ip + 'getData';
  getDataAllUrl = this.ip + 'getDataAll';
  insertDataUrl = this.ip + 'insertData';
  
  constructor(private http:HttpClient) { }
  ngOnInit() {
       this.http.get(this.getDataAllUrl ,{
        headers: {        'Content-Type':'application/json'}
      }).subscribe(
        data=>
        { this.response=data;
        }
        );
  console.log("URL = " + this.getDataAllUrl + ", Response" + this.response)
   
   
  }
    submit(){
      this.jsonstring ={
        "email_id": this.email_id,
        "password" :this.password
      };
        }
}
