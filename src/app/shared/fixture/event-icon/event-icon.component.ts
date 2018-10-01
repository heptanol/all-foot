import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-icon',
  templateUrl: './event-icon.component.html',
  styleUrls: ['./event-icon.component.scss']
})
export class EventIconComponent implements OnInit {

  @Input()type: string;
  constructor() { }

  ngOnInit() {
  }

}
