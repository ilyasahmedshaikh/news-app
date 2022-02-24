import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.scss']
})
export class NewsListingComponent implements OnInit {

  listing: any = [];

  constructor() { }

  ngOnInit(): void {
    this.listing = [
      {
        id: 1,
        image: 'assets/img/1.png',
        title: 'Breaking News | BBC News',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      },
      {
        id: 2,
        image: 'assets/img/2.jpg',
        title: 'Breaking News | Live News',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      },
      {
        id: 3,
        image: 'assets/img/3.jpg',
        title: 'Breaking News | Geo News',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      },
      {
        id: 4,
        image: 'assets/img/4.jpg',
        title: 'Breaking News | Express News',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      },
      {
        id: 5,
        image: 'assets/img/5.png',
        title: 'Breaking News | NBC News',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      }
    ]
  }

}
