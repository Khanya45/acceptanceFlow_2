import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSheet } from './job-sheet';

describe('JobSheet', () => {
  let component: JobSheet;
  let fixture: ComponentFixture<JobSheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSheet],
    }).compileComponents();

    fixture = TestBed.createComponent(JobSheet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
