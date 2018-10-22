import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-scourse',
  templateUrl: './scourse.component.html',
  styleUrls: ['./scourse.component.css']
})
export class ScourseComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  courseId:number;
  courses;

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.courseId = params["courseId"];
    });
    this.http.get('/api/courses').subscribe(data=>{
      this.courses = data;
    })
  }

}

// export class Course{
//   constructor(
//       public id:number,
//       public courseName:string,
//       public images:string,
//       public task:number,
//       public person:number
//       ){

//   }
// }