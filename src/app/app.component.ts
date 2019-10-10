import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ink-up-ui';
  response : any ='';
  jsonstring: any="";
  email_id: string = '';
  password: string = '';

  ip = "http://localhost:8081/inkup/"
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

      // this.http.post(this.getDataAllUrl,this.jsonstring,{
      //   headers: {        'Content-Type':'application/json', 'email_id': this.email_id,'password': this.password}


      // }).subscribe(
      //   data=>
      //   {this.response=data;
          
        
      //   if(this.response.status_cd =="1"){
          
      //   }
      // }
      //   );
        }
}
