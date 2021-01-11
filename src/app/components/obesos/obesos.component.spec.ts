import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObesosComponent } from './obesos.component';

describe('ObesosComponent', () => {
  let component: ObesosComponent;
  let fixture: ComponentFixture<ObesosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObesosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
