import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


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
    this.listService.addList({title: 'New List', cards: []});
  }

}
