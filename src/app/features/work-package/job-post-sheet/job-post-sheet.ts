import { Component } from "@angular/core";
import { CommonModule, Location } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { WorkMapComponent } from "../../../components/work-map/work-map";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";

type JobStatus = "Open" | "Accepted";

interface Job {
  title: string;
  status: JobStatus;
  assignedTo?: string;
  acceptedDate?: Date | string;
  location?: Record<string, any>;
}

@Component({
  selector: "app-job-post-page",
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatExpansionModule,
    WorkMapComponent,
    MatSnackBarModule,
  ],
  templateUrl: "./job-post-sheet.html",
})
export class JobPostSheetComponent {
  constructor(private locationNav: Location, private snackBar: MatSnackBar) {}

  job: Job | null = null;
  regionPolygon: any = null;

  sections: any[] = [];

  ngOnInit() {
    this.job = history.state?.job;
    this.sections = [
      {
        key: "location",
        title: "Location",
        type: "keyValue",
        expanded: true,
        data: this.job?.location ?? {},
        labels: {
          barangay: "Barangay",
          barangayCode: "Barangay Code",
          municipality: "Municipality",
          province: "Province",
          region: "Region",
          island: "Island",
        },
      },
      {
        key: "demographic",
        title: "Demographic data",
        type: "custom",
        emptyText: "No data available",
      },
      {
        key: "contextual",
        title: "Contextual data",
        type: "custom",
        emptyText: "No data available",
      },
      {
        key: "caretb",
        title: "CareTB data",
        type: "custom",
        emptyText: "No data available",
      },
      {
        key: "predictions",
        title: "TB Predictions",
        type: "custom",
        emptyText: "No data available",
      },
      {
        key: "itis-referral",
        title: "ITIS screening referral",
        type: "custom",
        emptyText: "No data available",
      },
      {
        key: "itis-2020",
        title: "ITIS metrics 2020",
        type: "custom",
        emptyText: "No data available",
      },
      {
        key: "itis-2021",
        title: "ITIS metrics 2021",
        type: "custom",
        emptyText: "No data available",
      },
      {
        key: "itis-2022",
        title: "ITIS metrics 2022",
        type: "custom",
        emptyText: "No data available",
      },
    ];

    this.sections = this.sections.filter(
      (s) => s.type !== "keyValue" || Object.keys(s.data ?? {}).length > 0
    );
  }

  acceptJob() {
    const ok = confirm("Accept this job and add it to your worklist?");
    if (!ok) return;

    setTimeout(() => {
      this.goBack();
      this.snackBar.open(
        "Job accepted! It has been added to your worklist.",
        "Close",
        { duration: 3000 }
      );
    }, 800);
  }

  declineJob() {
    const ok = confirm("Decline this job?");
    if (!ok) return;

    setTimeout(() => {
      this.goBack();
      this.snackBar.open(
        "Job declined. It will no longer appear in your job list.",
        "Close",
        { duration: 3000 }
      );
    }, 800);
  }

  onSectionOpened(section: any) {}

  trackByKey = (_: number, s: any) => s.key;

  goBack() {
    this.locationNav.back();
  }
}
