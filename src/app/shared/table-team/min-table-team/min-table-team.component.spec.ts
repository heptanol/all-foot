import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinTableTeamComponent } from './min-table-team.component';

describe('MinTableTeamComponent', () => {
  let component: MinTableTeamComponent;
  let fixture: ComponentFixture<MinTableTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinTableTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinTableTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
