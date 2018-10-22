import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  courseId:number;
  course;
  taskId:number;
  tasks;
  ngOnInit() {
    this.courseId = this.router.snapshot.params['courseId'];
    this.http.get('/api/courses/'+this.courseId).subscribe(data=>{
      this.course = data;
      console.log(this.course,this.courseId);
    });
    this.taskId = this.router.snapshot.params['taskId'];
    this.http.get('/api/tasks').subscribe(data=>{
      this.tasks = data;
    });
  }

}

