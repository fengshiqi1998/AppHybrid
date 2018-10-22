import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ScourseComponent } from './components/scourse/scourse.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
import { HomeComponent } from './components/home/home.component';
import { CommunityComponent } from './components/community/community.component';
import { CcourseComponent } from './components/ccourse/ccourse.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScourseComponent,
    CoursedetailComponent,
    HomeComponent,
    CommunityComponent,
    CcourseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'scourse',component:ScourseComponent},
      {path:'coursedetail/:id',component:CoursedetailComponent},
      {path:'ccourse',component:CcourseComponent},
      {path:'community',component:CommunityComponent},
      {path:'',redirectTo:"home",pathMatch:"full"},
      {path:'**',component:ScourseComponent}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
