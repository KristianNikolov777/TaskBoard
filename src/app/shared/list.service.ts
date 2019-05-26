import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { List } from './list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  initialLists: List[] = [
    {
      title: 'To Do',
      cards: []
    },
    {
      title: 'Doing',
      cards: []
    },
    {
      title: 'Done',
      cards: []
    },
  ];
  lists: List[] = [];
  listsChanged = new Subject<List[]>();

  constructor() {}

  getLists() {
    this.lists = JSON.parse(localStorage.getItem('lists')) || [];
    if (!this.lists.length) {
      localStorage.setItem('lists', JSON.stringify(this.initialLists));
      this.lists = this.initialLists;
    }
    this.listsChanged.next(this.lists.slice());
    return this.lists;
  }

  addList(list: List) {
    this.lists.push(list);
    this.listsChanged.next(this.lists.slice());
    localStorage.setItem('lists', JSON.stringify(this.lists));
  }

  editList(index, newTitle) {
    this.lists[index].title = newTitle;
    this.listsChanged.next(this.lists.slice());
    localStorage.setItem('lists', JSON.stringify(this.lists));
  }

  deleteList(index) {
    this.lists.splice(index, 1);
    this.listsChanged.next(this.lists.slice());
    localStorage.setItem('lists', JSON.stringify(this.lists));
  }

}
