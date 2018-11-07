import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {

  @Input() feed: any;

  getSource(feed: any): string {
    if (feed.link.includes('goal.com')) {
      return 'goal.com';
    }
    if (feed.link.includes('lequipe.fr')) {
      return 'lequipe.fr';
    }
    if (feed.link.includes('eurosport.fr')) {
      return 'eurosport.fr';
    }
    if (feed.link.includes('eurosport.com')) {
      return 'eurosport.com';
    }
    if (feed.link.includes('mirror.co.uk')) {
      return 'mirror.co.uk';
    }
  }

}
