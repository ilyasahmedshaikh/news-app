import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsListingComponent } from './news-listing/news-listing.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsAddEditComponent } from './news-add-edit/news-add-edit.component';


@NgModule({
  declarations: [
    NewsComponent,
    NewsListingComponent,
    NewsDetailComponent,
    NewsAddEditComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
