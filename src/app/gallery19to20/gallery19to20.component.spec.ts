import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery19to20Component } from './gallery19to20.component';

describe('Gallery19to20Component', () => {
  let component: Gallery19to20Component;
  let fixture: ComponentFixture<Gallery19to20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery19to20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery19to20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
