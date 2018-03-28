import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SodasComponent } from './sodas.component';

describe('SodasComponent', () => {
  let component: SodasComponent;
  let fixture: ComponentFixture<SodasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SodasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SodasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
