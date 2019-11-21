import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {

  @Input() feed: any;

  getSource(feed: any): string {
    if (!feed.link || typeof feed.link !== 'string') {
      return '';
    }
    if (feed.link.indexOf('goal.com')) {
      return 'goal.com';
    }
    if (feed.link.indexOf('lequipe.fr')) {
      return 'lequipe.fr';
    }
    if (feed.link.indexOf('eurosport.fr')) {
      return 'eurosport.fr';
    }
    if (feed.link.indexOf('eurosport.com')) {
      return 'eurosport.com';
    }
    if (feed.link.indexOf('mirror.co.uk')) {
      return 'mirror.co.uk';
    }
  }

}
