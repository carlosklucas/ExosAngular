import { Component } from '@angular/core';
import { Entry } from '../entry';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  history: Entry[] = [];

  constructor() { }

  removeEntry(index: number) {
    this.history.splice(index, 1);
  }
  
}
