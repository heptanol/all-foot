import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(meta: Meta, title: Title) {
    title.setTitle('Footpaper');

    meta.addTags([
      { name: 'author',   content: 'Footpaper.com'},
      { name: 'keywords', content: 'Footpaper, Football, foot'},
      { name: 'description', content: '' }
    ]);
  }

  ngOnInit() {
  }
}
