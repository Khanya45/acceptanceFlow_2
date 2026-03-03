import { Component } from "@angular/core";
import { WorkMapComponent } from "../../components/work-map/work-map";
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from "@angular/material/bottom-sheet";
import { JobSheetComponent } from "../work-package/job-sheet/job-sheet";


@Component({
  selector: "app-home",
  imports: [WorkMapComponent, MatBottomSheetModule],
  templateUrl: "./home.html",
  styleUrl: "./home.css",
})
export class Home {
  workPackage = {
    regionName: "Bicol Region",
    regionDescription:
      "The Bicol Region (Region V) is a major administrative area in the Philippines, comprising six provinces (Albay, Camarines Norte, Camarines Sur, Catanduanes, Masbate, and Sorsogon) with Legazpi City as its regional center. It is known for its agricultural economy, focusing on coconut, abaca, and rice, along with a high incidence of tuberculosis (TB).",
    jobs: [
      {
        id: "1",
        title: "Zamboanga Peninsula",
        status: "Accepted",
        assignedTo: "Carlo Mendoza",
        acceptedDate: "2026-04-21",
        metrics: {
          population: 6521,
          index: 0.755,
          desired: 2000,
          complete: 0,
        },
        location: {
          barangay: "Pias",
          barangayCode: 29588,
          municipality: "General Tinio",
          province: "Nueva Ecija",
          region: "Central Luzon (Region III)",
          island: "Luzon",
        },
      },
      {
        id: "2",
        title: "Davao Region",
        status: "Open",
        assignedTo: null,
        acceptedDate: null,
        metrics: {
          population: 6521,
          index: 0.755,
          desired: 2000,
          complete: 0,
        },
        location: {
          barangay: "Pias",
          barangayCode: 29588,
          municipality: "General Tinio",
          province: "Nueva Ecija",
          region: "Central Luzon (Region III)",
          island: "Luzon",
        },
      },
    ],
  };

  constructor(private bottomSheet: MatBottomSheet) {}

  openJobSheet() {
    this.bottomSheet.open(JobSheetComponent, {
      data: { data: this.workPackage },
      panelClass: ["job-post-bottom-sheet"],
      disableClose: false,
    });
  }
}
