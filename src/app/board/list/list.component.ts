import { Component, Input, OnInit } from '@angular/core';

import { List } from '../../shared/list.model';
import { Card } from '../../shared/card.model';
import { ListService } from '../../shared/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: List;
  @Input() index;
  cards: Card[] = [
    new Card(1, 'test', 'just testing')
  ];

  constructor(private listService: ListService) { }

  ngOnInit() {
  }

  onDeleteList(index) {
    this.listService.deleteList(index);
  }

}
