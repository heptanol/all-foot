import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureMinComponent } from './fixture-min.component';

describe('FixtureMinComponent', () => {
  let component: FixtureMinComponent;
  let fixture: ComponentFixture<FixtureMinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureMinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
