import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { JobPostSheetComponent } from './features/work-package/job-post-sheet/job-post-sheet';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'work-map',
    pathMatch: 'full'
  },
  {
    path: 'work-map',
    component: Home
  },
  {
    path: 'job-post',
    component: JobPostSheetComponent
  },
];
