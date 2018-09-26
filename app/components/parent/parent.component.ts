import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  // txt:string;
  counter:number = 0;
  arr = [];
  // add(txt){
  //   // console.log(txt);
  //   this.arr.push(new Msg(txt,false));
  //     // txt = '';
  //     this.count();
  // }
  getValue(txt) {
    this.arr.unshift(txt);
    this.count();
  }
  
  count(){
    this.counter = 0;
    this.arr.forEach((value,index)=>{
      if(value.done){
        this.counter++;
      }
    });
  }
  del(idx:number){
    // console.log(idx);
    this.arr.splice(idx,1);
    this.count();
  }
  change(idx) {
    this.arr[idx].done = !this.arr[idx].done;
    this.count();
  }
  constructor() { }

  ngOnInit() {
  }

}

export class Msg{
  constructor(public title:string,public done:boolean){}
}