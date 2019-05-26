import { Component, Input, OnInit } from '@angular/core';

import { List } from '../../shared/list.model';
import { ListService } from '../../shared/list.service';
import { CardService } from '../../shared/card.service';

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
  editList = false;
  listTitle;

  constructor(private listService: ListService, private cardService: CardService) { }

  ngOnInit() {
  }

  onDeleteList(index) {
    this.listService.deleteList(index);
  }

  onAddCard() {
    this.createCard = true;
  }

  onCreateCard(index) {
    if (this.cardTitle) {
      this.cardService.addCard(index, {title: this.cardTitle, description: this.cardDescription});
      this.createCard = false;
      this.cardDescription = '';
      this.cardTitle = '';
    }
  }

  onEditList() {
    this.editList = true;
  }

  onUpdateList(index) {
    if (this.listTitle) {
        this.listService.editList(index, this.listTitle);
        this.editList = false;
        this.listTitle = '';
    } else {
      alert('Please add title');
    }
  }
}
