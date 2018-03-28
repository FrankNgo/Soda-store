import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Soda } from './soda';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SodaService {

  private sodasUrl = 'api/sodas';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET sodas from the server */
  getSodas (): Observable<Soda[]> {
    return this.http.get<Soda[]>(this.sodasUrl)
      .pipe(
        tap(sodas => this.log(`fetched sodas`)),
        catchError(this.handleError('getSodaes', []))
      );
  }

  /** GET soda by id. Return `undefined` when id not found */
  getSodaNo404<Data>(id: number): Observable<Soda> {
    const url = `${this.sodasUrl}/?id=${id}`;
    return this.http.get<Soda[]>(url)
      .pipe(
        map(sodas => sodas[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} soda id=${id}`);
        }),
        catchError(this.handleError<Soda>(`getSoda id=${id}`))
      );
  }

  /** GET soda by id. Will 404 if id not found */
  getSoda(id: number): Observable<Soda> {
    const url = `${this.sodasUrl}/${id}`;
    return this.http.get<Soda>(url).pipe(
      tap(_ => this.log(`fetched soda id=${id}`)),
      catchError(this.handleError<Soda>(`getSoda id=${id}`))
    );
  }

  /* GET sodas whose name contains search term */
  searchSodas(term: string): Observable<Soda[]> {
    if (!term.trim()) {
      // if not search term, return empty soda array.
      return of([]);
    }
    return this.http.get<Soda[]>(`api/sodas/?name=${term}`).pipe(
      tap(_ => this.log(`found sodas matching "${term}"`)),
      catchError(this.handleError<Soda[]>('searchSodaes', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new soda to the server */
  addSoda (soda: Soda): Observable<Soda> {
    return this.http.post<Soda>(this.sodasUrl, soda, httpOptions).pipe(
      tap((soda: Soda) => this.log(`added soda w/ id=${soda.id}`)),
      catchError(this.handleError<Soda>('addSoda'))
    );
  }

  /** DELETE: delete the soda from the server */
  deleteSoda (soda: Soda | number): Observable<Soda> {
    const id = typeof soda === 'number' ? soda : soda.id;
    const url = `${this.sodasUrl}/${id}`;

    return this.http.delete<Soda>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted soda id=${id}`)),
      catchError(this.handleError<Soda>('deleteSoda'))
    );
  }

  /** PUT: update the soda on the server */
  updateSoda (soda: Soda): Observable<any> {
    return this.http.put(this.sodasUrl, soda, httpOptions).pipe(
      tap(_ => this.log(`updated soda id=${soda.id}`)),
      catchError(this.handleError<any>('updateSoda'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a SodaService message with the MessageService */
  private log(message: string) {
    this.messageService.add('SodaService: ' + message);
  }
}
