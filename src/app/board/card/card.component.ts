import { Component, OnInit, Input } from '@angular/core';

import { Card } from '../../shared/card.model';
import { CardService } from '../../shared/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Input() cardIndex;
  @Input() listIndex;
  editMode = false;
  viewDetailCard = false;

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

  onDeleteCard(cardIndex) {
    this.cardService.deleteCard(this.listIndex, cardIndex);
  }

  onViewCard() {
    this.editMode = false;
    this.viewDetailCard = true;
  }

  onEditCard() {
    this.editMode = true;
    this.viewDetailCard = true;
  }

  onClosed() {
    this.viewDetailCard = false;
  }

}
