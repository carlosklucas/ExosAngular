import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Transaction } from './transaction';
import { Detail } from './detail';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const transactions = [
      {
        id: 1,
        name: 'Carlos Lucas',
        date: "2024-04-30",
        amount: 50.25,
        description: "Groceries",
        age: 38,
        email: "carlos@gmail.com",
        address: "Travessa dos Mastros 20, Lisboa"
      },
      {
        id: 2,
        name: "Joana Botelho",
        date: "2024-04-29",
        amount: 35.60,
        description: "Gasoline",
        age: 33,
        email: "joanabotelho@gmail.com",
        address: "Rua do Ouro 4, Lisboa"
      },
      {
        id: 3,
        name: "Maria Nunes",
        date: "2024-04-28",
        amount: 80.00,
        description: "Dinner with friends",
        age: 31,
        email: "maria@gmail.com",
        address: "Rua da Prata 4, Lisboa"
      }
    ];
    
    const details = [
      {
        id: 1,
        name: "Carlos Lucas",
        age: 38,
        email: "carlos@gmail.com",
        address: "Travessa dos Mastros 20, Lisboa"
      },
      {
        id: 2,
        name: "Joana Botelho",
        age: 33,
        email: "joanabotelho@gmail.com",
        address: "Rua do Ouro 4, Lisboa"
      },
      {
        id: 3,
        name: "Maria Nunes",
        age: 31,
        email: "maria@gmail.com",
        address: "Rua da Prata 4, Lisboa"
      }
    ];

    return { transactions, details };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(transactions: Transaction[]): number {
    return transactions.length > 0 ? Math.max(...transactions.map(transaction => transaction.id)) + 1 : 11;
  }

  genDetail(details: Detail[]): number {
    return details.length > 0 ? Math.max(...details.map(detail => detail.id)) + 1 : 11;
  }
}
