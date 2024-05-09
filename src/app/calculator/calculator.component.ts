import { Component } from '@angular/core';
import { Entry } from '../entry';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  operand1: number = 0;
  operand2: number = 0;
  operator: string = '';
  result: number | null = null;
  history: Entry[] = [];

  constructor() { }

  calculate() {
    let operationText = `${this.operand1} ${this.operator} ${this.operand2}`;
    let calculatedResult: number | null = null;

    switch (this.operator) {
      case 'add':
        calculatedResult = this.operand1 + this.operand2;
        break;
      case 'subtract':
        calculatedResult = this.operand1 - this.operand2;
        break;
      case 'multiply':
        calculatedResult = this.operand1 * this.operand2;
        break;
      case 'divide':
        if (this.operand2 !== 0) {
          calculatedResult = this.operand1 / this.operand2;
        } else {
          calculatedResult = null; // Handle division by zero
        }
        break;
      default:
        calculatedResult = null; // Handle invalid operator
    }

    if (calculatedResult !== null) {
      this.result = calculatedResult;
      this.history.push({
        time: new Date(),
        operation: operationText,
        result: calculatedResult
      });
    }
  }

  removeEntry(index: number) {
    this.history.splice(index, 1);
  }
}
