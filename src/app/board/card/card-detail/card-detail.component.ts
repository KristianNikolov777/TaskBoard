import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Card } from '../../../shared/card.model';
import { CardService } from '../../../shared/card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  @Input() card: Card;
  @Input() editMode;
  @Input() cardIndex;
  @Input() listIndex;
  @Output() closed = new EventEmitter<boolean>();
  cardTitle;
  cardDescription;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardTitle = this.card.title;
    this.cardDescription = this.card.description;
  }

  onClose() {
    this.closed.emit(true);
  }

  onEditCard() {
    if (this.cardTitle && this.cardDescription) {
      const newCard = {title: this.cardTitle, description: this.cardDescription};
      this.cardService.editCard(this.listIndex, this.cardIndex, newCard);
      this.cardTitle = '';
      this.cardDescription = '';
      this.onClose();
    } else {
      alert('Please add title and description!');
    }
  }

}
