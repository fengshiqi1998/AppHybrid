import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Msg } from '../parent/parent.component';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() data= new EventEmitter();
  txt:string;
  constructor() { }
  
  add(txt){
    // console.log(txt);
    this.data.emit(txt);
    txt = '';
  }
  index: number;
  getIndex(i) {
    this.index = i;
  }
  getValue(e) {
    if (e.keyCode == 13) {
      this.Get();
      this.txt = "";
    }
  }
  Get() {
    this.data.emit(new Msg(this.txt, false));
  }
  ngOnInit() {
    // setTimeout(()=>{console.log(this.txt);},5000);
    // setInterval(()=>{console.log(this.txt)});
  }

}

