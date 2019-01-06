import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinectionComponent } from './prinection.component';

describe('PrinectionComponent', () => {
  let component: PrinectionComponent;
  let fixture: ComponentFixture<PrinectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
