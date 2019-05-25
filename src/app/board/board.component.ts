import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// import { FormControl } from '@angular/forms';


import { List } from '../shared/list.model';
import { ListService } from '../shared/list.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  lists: List[] = [];
  subscription: Subscription;
  createList = false;
  listTitle;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.lists = this.listService.getLists();

    this.subscription = this.listService.listsChanged.subscribe(
      (lists: List[]) => {
        this.lists = lists;
      }
    );
  }

  onAddList() {
    this.createList = true;
  }

  onCreateList() {
    if (this.listTitle) {
      this.listService.addList({title: this.listTitle, cards: []});
      this.createList = false;
      this.listTitle = '';
    } else {
      alert('Please enter title!');
    }
  }

}
