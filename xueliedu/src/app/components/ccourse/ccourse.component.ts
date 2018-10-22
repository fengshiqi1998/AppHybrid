import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-ccourse',
  templateUrl: './ccourse.component.html',
  styleUrls: ['./ccourse.component.css']
})
export class CcourseComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private http:HttpClient) { }

  courseId:number;
  courses;

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.courseId = params["courseId"];
    });
    this.http.get('/api/ccourses').subscribe(data=>{
      this.courses = data;
    })
  }
}
