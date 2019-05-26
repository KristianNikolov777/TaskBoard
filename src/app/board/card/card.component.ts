import { Component, OnInit, Input} from '@angular/core';

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

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

  onDeleteCard(cardIndex) {
    this.cardService.deleteCard(this.listIndex, cardIndex);
  }

}
