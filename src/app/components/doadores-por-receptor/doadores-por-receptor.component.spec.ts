import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoadoresPorReceptorComponent } from './doadores-por-receptor.component';

describe('DoadoresPorReceptorComponent', () => {
  let component: DoadoresPorReceptorComponent;
  let fixture: ComponentFixture<DoadoresPorReceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoadoresPorReceptorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoadoresPorReceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
