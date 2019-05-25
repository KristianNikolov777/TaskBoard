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
  cardDescription;
  cardTitle;
  createCard = false;

  constructor(private listService: ListService) { }

  ngOnInit() {
  }

  onDeleteList(index) {
    this.listService.deleteList(index);
  }

  onAddCard() {
    this.createCard = true;
  }

  onCreateCard(index) {
    if (this.cardTitle && this.cardDescription) {
      this.listService.addCard(index, {title: this.cardTitle, description: this.cardDescription});
      this.createCard = false;
      this.cardDescription = '';
      this.cardTitle = '';
    }
  }
}
