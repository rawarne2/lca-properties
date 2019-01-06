import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackstoneComponent } from './blackstone.component';

describe('BlackstoneComponent', () => {
  let component: BlackstoneComponent;
  let fixture: ComponentFixture<BlackstoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackstoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackstoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
