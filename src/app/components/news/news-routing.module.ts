import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './news.component';
import { NewsListingComponent } from './news-listing/news-listing.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsAddEditComponent } from './news-add-edit/news-add-edit.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [
      {
        path: '',
        component: NewsListingComponent
      },
      {
        path: 'news-listing',
        component: NewsListingComponent
      },
      {
        path: 'news-detail',
        component: NewsDetailComponent
      },
      {
        path: 'news-add-edit',
        component: NewsAddEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
