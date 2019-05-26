import { Injectable } from '@angular/core';

import { ListService } from './list.service';
import { Card } from './card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private listService: ListService) {
  }

  addCard(index, card: Card) {
    const lists = this.listService.getLists();
    lists[index].cards.push(card);
    this.listService.listsChanged.next(lists.slice());
    localStorage.setItem('lists', JSON.stringify(lists));
  }

  editCard(listIndex, cardIndex, card: Card) {
    const lists = this.listService.getLists();
    lists[listIndex].cards[cardIndex] = card;
    this.listService.listsChanged.next(lists.slice());
    localStorage.setItem('lists', JSON.stringify(lists));
  }

  deleteCard(listIndex, cardIndex) {
    const lists = this.listService.getLists();
    lists[listIndex].cards.splice(cardIndex, 1);
    this.listService.listsChanged.next(lists.slice());
    localStorage.setItem('lists', JSON.stringify(lists));
  }
}
