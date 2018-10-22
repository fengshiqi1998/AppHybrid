import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  communityId:number;
  community;
  conversation;

  ngOnInit() {
    this.communityId = this.router.snapshot.params['communityId'];
    
    this.http.get('/api/community').subscribe((data)=>{
      this.community = data;
    })
    this.http.get('/api/conversation').subscribe((data)=>{
      this.conversation = data;
    })
  }

}
