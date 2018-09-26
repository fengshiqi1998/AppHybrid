import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Msg } from '../parent/parent.component';


@Component({
  selector: 'app-childlist',
  templateUrl: './childlist.component.html',
  styleUrls: ['./childlist.component.css']
})
export class ChildlistComponent implements OnInit {
  
  @Input() arry:Msg[];
  @Input() counter;
  @Output() delIndex:EventEmitter<number> = new EventEmitter();
  @Output() chIndex:EventEmitter<number> = new EventEmitter<number>();
  del(i){
    this.delIndex.emit(i);
  }
  change(i){
    this.chIndex.emit(i);
  }
  constructor() { }

  ngOnInit() {
  }

}
