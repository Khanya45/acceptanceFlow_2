import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';


type JobStatus = 'Open' | 'Accepted';

export interface JobRow {
  id: string;
  title: string;
  status: JobStatus;
  assignedTo?: string;
  acceptedDate?: string | Date;
  location?: any;
  metrics:any
}

@Component({
  selector: 'app-job-sheet',
  templateUrl: './job-sheet.html',
  imports: [MatIconModule, CommonModule, DragDropModule],
  styleUrl: './job-sheet.css'
})
export class JobSheetComponent {
  
  acceptedCount = 0
  totalCount = 0
  jobs: any[] = [];

  constructor(
    private router: Router,
    private ref: MatBottomSheetRef<JobSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
  }
  
  ngOnInit() {
    this.jobs = Array.isArray(this.data?.data?.jobs) ? this.data.data.jobs : [];
    this.acceptedCount = (this.jobs ?? []).filter((j: any) => j?.status === 'Accepted').length;
    this.totalCount = (this.jobs ?? []).length;
  }

  close() {
    this.ref.dismiss();
  }

  openJob(job: JobRow) {
    this.ref.dismiss();
    this.router.navigate(['/job-post'], { state: { job } });
  }

  trackById = (_: number, item: JobRow) => item.id;

  onDragEnded(event: CdkDragEnd) {
    const y = event.distance.y;
    if (y > 120) this.ref.dismiss();
    else event.source.reset();
  }
}