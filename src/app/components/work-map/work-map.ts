import { Component, ViewChild, ElementRef, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as L from "leaflet";

@Component({
  selector: "app-work-map",
  imports: [CommonModule],
  templateUrl: "./work-map.html",
  styleUrl: "./work-map.css",
})
export class WorkMapComponent {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef<HTMLDivElement>;
  @Input() activePage: any = null;

  private map!: L.Map;

  ngAfterViewInit(): void {
    this.map = L.map(this.mapContainer.nativeElement, { zoomControl: false })
      .setView([-33.9249, 18.4241], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    const polygon = L.polygon(
      [
        [-33.929, 18.405],
        [-33.929, 18.420],
        [-33.940, 18.420],
        [-33.940, 18.405],
      ],
      { color: '#7c3aed', fillOpacity: 0.35 }
    ).addTo(this.map);

    polygon.on('click', () => {
      console.log('Polygon clicked');
    });
  }
}
