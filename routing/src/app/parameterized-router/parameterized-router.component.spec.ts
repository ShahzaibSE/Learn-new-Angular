import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterizedRouterComponent } from './parameterized-router.component';

describe('ParameterizedRouterComponent', () => {
  let component: ParameterizedRouterComponent;
  let fixture: ComponentFixture<ParameterizedRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterizedRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterizedRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
