import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Transaction } from '../transaction';
import { Detail } from '../detail';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: [ './detail.component.css' ]
})
export class DetailComponent implements OnInit {
  transaction: Transaction | undefined;
  detail: Detail | undefined;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTransaction();
  }

  getTransaction(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.transactionService.getTransaction(id)
      .subscribe(transaction => this.transaction = transaction);
  }

  goBack(): void {
    this.location.back();
  }


}
