import { Transaction } from './transaction';

export const TRANSACTIONS: Transaction[] = [
  {
    id: 1,
    name: 'Carlos Lucas',
    date: new Date("2024-04-30"),
    amount: 50.25,
    description: "Groceries",
    age: 38,
    email: "carlos@gmail.com",
    address: "Travessa dos Mastros 20, Lisboa"
  },
  {
    id: 2,
    name: "Joana Botelho",
    date: new Date("2024-04-29"),
    amount: 35.60,
    description: "Gasoline",
    age: 33,
    email: "joanabotelho@gmail.com",
    address: "Rua do Ouro 4, Lisboa"
  },
  {
    id: 3,
    name: "Maria Nunes",
    date: new Date("2024-04-28"),
    amount: 80.00,
    description: "Dinner with friends",
    age: 31,
    email: "maria@gmail.com",
    address: "Rua da Prata 4, Lisboa"
  }
];
