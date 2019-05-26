import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './board/card/card.component';
import { ListComponent } from './board/list/list.component';
import { ListService } from './shared/list.service';
import { CardService } from './shared/card.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ListService, CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
