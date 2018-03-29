import { Component, OnInit } from '@angular/core';
import { Soda } from '../soda';
import { SodaService } from '../soda.service';


@Component({
  selector: 'app-sodas',
  templateUrl: './sodas.component.html',
  styleUrls: ['./sodas.component.css']
})
export class SodasComponent implements OnInit {
  sodas: Soda[];

  constructor(private sodaService: SodaService) { }

  ngOnInit() {
    this.getSodas();
  }

  getSodas(): void {
    this.sodaService.getSodas()
    .subscribe(sodas => this.sodas =sodas);
  }

  add(name: string,quantity: number,background: string): void {
  name = name.trim();
  if (!name) { return; }
  this.sodaService.addSoda({ name, quantity, background } as Soda)
    .subscribe(soda => {
      this.sodas.push(soda);
    });
  }


  delete(soda: Soda): void {
    this.sodas = this.sodas.filter(h => h !== soda);
    this.sodaService.deleteSoda(soda).subscribe();
  }
}
