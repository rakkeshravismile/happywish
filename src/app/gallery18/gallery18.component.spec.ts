import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery18Component } from './gallery18.component';

describe('Gallery18Component', () => {
  let component: Gallery18Component;
  let fixture: ComponentFixture<Gallery18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
