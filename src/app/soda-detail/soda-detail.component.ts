import { Component, OnInit, Input } from '@angular/core';
import { Soda } from '../soda';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SodaService }  from '../soda.service';


@Component({
  selector: 'app-soda-detail',
  templateUrl: './soda-detail.component.html',
  styleUrls: ['./soda-detail.component.css']
})
export class SodaDetailComponent implements OnInit {
  @Input() soda: Soda;

  constructor(
    private route: ActivatedRoute,
    private sodaService: SodaService,
    private location: Location
  ) { }


  ngOnInit(): void {
    this.getSoda();
  }

  getSoda(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.sodaService.getSoda(id)
      .subscribe(soda => this.soda = soda);
  }

  goBack(): void {
  this.location.back();
  }

  save(): void {
     this.sodaService.updateSoda(this.soda)
       .subscribe(() => this.goBack());
   }

}
