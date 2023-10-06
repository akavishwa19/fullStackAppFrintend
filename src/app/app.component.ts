import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  dataList=[];
  ngOnInit() {
    this.http.get('http://localhost:3000/user').subscribe((res:any)=>{
      this.dataList=res;
      console.log(this.dataList);
    },
      (err)=>{
      console.log('error fetching data');
      });
  }

  constructor(private http:HttpClient) {
  }
  title = 'learningFrontendFinal';

  apiForm=new FormGroup({
    name:new FormControl(null,Validators.required),
    age:new FormControl(null,Validators.required),
    stream:new FormControl(null,Validators.required),
    phone:new FormControl(null,Validators.required),
  })

  onSubmit(){
    console.log(this.apiForm.value);
    this.http.post('http://localhost:3000/user',this.apiForm.value).subscribe((res)=>{
      console.log('succesfully posted the product')
    },
      (err)=>{
      console.log('some error while sending request');
      });
  }

  headers=['name','age','stream','phone','edit','delete'];



}
