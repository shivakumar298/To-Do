import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
    check: boolean = false;
    lit: any =[];
    list1: any=[];
    list: any=[];

  constructor() { }

  ngOnInit() {

   this.list = JSON.parse(localStorage.getItem('list'))


console.log('bye')
    

  }


  onSubmit(data){
    console.log('data from text field',data.textfield)
  
    this.datapush(data);
    
 
  }
  
  datapush(info){
 
    this.list1.push(info);
    localStorage.setItem('list',JSON.stringify(this.list1))
 
    
console.log('hi',this.list)

  }




}
