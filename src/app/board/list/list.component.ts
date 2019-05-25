import { Component, Input, OnInit } from '@angular/core';

import { List } from '../../shared/list.model';
import { Card } from '../../shared/card.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: List;
  cards: Card[] = [
    new Card(1, 'test', 'just testing')
  ];

  constructor() { }

  ngOnInit() {
  }

}
