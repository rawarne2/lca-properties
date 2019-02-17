import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Princeton } from './princeton.component';

describe('Princeton', () => {
  let component: Princeton;
  let fixture: ComponentFixture<Princeton>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Princeton ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Princeton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
