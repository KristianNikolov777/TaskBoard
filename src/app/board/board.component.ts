import { Component, OnInit } from '@angular/core';

import { List } from '../shared/list.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  lists: List[] = [
    new List('To Do', []),
    new List('Doing', []),
    new List('Done', []),
    new List('sfsd', []),
    new List('sfsd', []),
  ];

  constructor() { }

  ngOnInit() {
  }

}
