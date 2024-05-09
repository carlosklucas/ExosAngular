import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: [ './exercise3.component.css' ]
})
export class Exercise3Component implements OnInit {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.transactionService.getTransactions()
      .subscribe(transactions => this.transactions = transactions);
  }
}
