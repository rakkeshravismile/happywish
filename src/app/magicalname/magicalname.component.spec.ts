import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicalnameComponent } from './magicalname.component';

describe('MagicalnameComponent', () => {
  let component: MagicalnameComponent;
  let fixture: ComponentFixture<MagicalnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicalnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicalnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
