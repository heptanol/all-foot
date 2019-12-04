import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureHeaderComponent } from './fixture-header.component';

describe('FixtureHeaderComponent', () => {
  let component: FixtureHeaderComponent;
  let fixture: ComponentFixture<FixtureHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
