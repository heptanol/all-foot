import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinTableComponent } from './min-table.component';

describe('MinTableComponent', () => {
  let component: MinTableComponent;
  let fixture: ComponentFixture<MinTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
