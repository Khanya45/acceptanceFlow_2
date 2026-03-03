import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostSheetComponent } from './job-post-sheet';

describe('JobPostSheetComponent', () => {
  let component: JobPostSheetComponent;
  let fixture: ComponentFixture<JobPostSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobPostSheetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JobPostSheetComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
