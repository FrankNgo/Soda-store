import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SodaSearchComponent } from './soda-search.component';

describe('SodaSearchComponent', () => {
  let component: SodaSearchComponent;
  let fixture: ComponentFixture<SodaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SodaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SodaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
