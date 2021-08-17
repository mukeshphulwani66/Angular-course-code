import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB2Component } from './comp-b2.component';

describe('CompB2Component', () => {
  let component: CompB2Component;
  let fixture: ComponentFixture<CompB2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompB2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
