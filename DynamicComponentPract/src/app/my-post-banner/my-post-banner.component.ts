import { Component, ViewChild, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { MypostComponent } from 'app/mypost/mypost.component';
import { ArticleComponent } from 'app/article/article.component';
import { TechnologyComponent } from 'app/technology/technology.component';
import { MypostDirective } from 'app/mypost.directive';

// Model
import { MyPost } from 'app/models/myPost';
import { PostItem } from 'app/post-item';

// Service
import { MyPostService } from 'app/my-post.service';

@Component({
  selector: 'app-my-post-banner',
  templateUrl: './my-post-banner.component.html',
  styleUrls: ['./my-post-banner.component.css']
})
export class MyPostBannerComponent implements AfterViewInit, OnDestroy {

  @ViewChild(MypostDirective)
  private myPostDirective: MypostDirective;	

  @ViewChild(MypostComponent)
  private myPostComponent: MypostComponent;	

  postItems: PostItem[];
  intervalId: any;	
  postIndex: number = -1;

  constructor(private myPostService: MyPostService) { }

  ngAfterViewInit() {
     this.postItems = this.myPostService.getAllPosts(); 	
     this.startPostHighlights();
  }	
  startPostHighlights() {
     this.intervalId = setInterval(() => {
     
     this.postIndex = (this.postIndex === this.postItems.length)? 0 : this.postIndex + 1;

 //Use viewContainerRef from Directive
       this.myPostService.loadComponent(this.myPostDirective.viewContainerRef, this.postItems[this.postIndex]);
   
 //Use viewContainerRef from Component
 this.myPostService.loadComponent(this.myPostComponent.viewContainerRef, this.postItems[this.postIndex]);

     }, 2000);

    //  clearInterval(this.intervalId);
  }	
  ngOnDestroy() {
     clearInterval(this.intervalId);
  }	

}
