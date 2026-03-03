import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkMap } from './work-map';

describe('WorkMap', () => {
  let component: WorkMap;
  let fixture: ComponentFixture<WorkMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkMap],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkMap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
