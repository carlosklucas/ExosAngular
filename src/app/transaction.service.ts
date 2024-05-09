import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Transaction } from './transaction';
import { Detail } from './detail';

import { MessageService } from './message.service';


@Injectable({ 
  providedIn: 'root' 
})
export class TransactionService {

  //private heroesUrl = 'api/transactions';  // URL to web api
  private transactionsUrl = 'http://localhost:4200/assets/transactions.json';
  private idUrl = 'http://localhost:4200/assets/details.json';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionsUrl)
      .pipe(
        tap(_ => this.log('fetched transactions')),
        catchError(this.handleError<Transaction[]>('getTransactions', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<Transaction> {
    const url = `${this.transactionsUrl}/?id=${id}`;
    return this.http.get<Transaction[]>(url)
      .pipe(
        map(transactions => transactions[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} transaction id=${id}`);
        }),
        catchError(this.handleError<Transaction>(`getTransaction id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getTransaction(id: number): Observable<Transaction> {
    const url = `${this.idUrl}/${id}`;
    return this.http.get<Transaction>(url).pipe(
      tap(_ => this.log(`fetched detail id=${id}`)),
      catchError(this.handleError<Transaction>(`getTransaction id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchTransactions(term: string): Observable<Transaction[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Transaction[]>(`${this.transactionsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found transactions matching "${term}"`) :
         this.log(`no transactions matching "${term}"`)),
      catchError(this.handleError<Transaction[]>('searchTransactions', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addTransaction(hero: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.transactionsUrl, hero, this.httpOptions).pipe(
      tap((newHero: Transaction) => this.log(`added transaction w/ id=${newHero.id}`)),
      catchError(this.handleError<Transaction>('addTransaction'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteTransaction(id: number): Observable<Transaction> {
    const url = `${this.transactionsUrl}/${id}`;

    return this.http.delete<Transaction>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted transaction id=${id}`)),
      catchError(this.handleError<Transaction>('deleteTransaction'))
    );
  }

  /** PUT: update the hero on the server */
  updateTransaction(transaction: Transaction): Observable<any> {
    return this.http.put(this.transactionsUrl, transaction, this.httpOptions).pipe(
      tap(_ => this.log(`updated transaction id=${transaction.id}`)),
      catchError(this.handleError<any>('updateTransaction'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TransactionService: ${message}`);
  }
}
