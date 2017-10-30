import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MypostDirective } from './mypost.directive';
import { TechnologyComponent } from './technology/technology.component';
import { ArticleComponent } from './article/article.component';
import { MypostComponent } from './mypost/mypost.component';

// Services
import { MyPostService } from './my-post.service';
import { MyPostBannerComponent } from './my-post-banner/my-post-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    MypostDirective,
    TechnologyComponent,
    ArticleComponent,
    MypostComponent,
    MyPostBannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  entryComponents : [TechnologyComponent, ArticleComponent],
  providers: [MyPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
