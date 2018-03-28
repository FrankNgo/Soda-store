import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Soda } from '../soda';
import { SodaService } from '../soda.service';

@Component({
  selector: 'app-soda-search',
  templateUrl: './soda-search.component.html',
  styleUrls: [ './soda-search.component.css' ]
})
export class SodaSearchComponent implements OnInit {
  sodas$: Observable<Soda[]>;
  private searchTerms = new Subject<string>();

  constructor(private sodaService: SodaService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.sodas$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.sodaService.searchSodas(term)),
    );
  }
}
