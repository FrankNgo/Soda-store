import { Component, OnInit } from '@angular/core';
import { Soda } from '../soda';
import { SodaService } from '../soda.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  sodas: Soda[] = [];

  constructor(private sodaService: SodaService) { }

  ngOnInit() {
    this.getSodas();
  }

  getSodas(): void {
    this.sodaService.getSodas()
      .subscribe(sodas => this.sodas = sodas.slice(1, 5));
  }
}
