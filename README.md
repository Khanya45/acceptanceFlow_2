# Worker Acceptance Flow Application

This is an Angular + Tailwind CSS application built to support a **field worker job acceptance flow**.

Workers are assigned job posts in specific **regions and villages**.  
They can view regions on a **map**, inspect job details, and **accept or decline** work assignments.

---

## Tech Stack

- **Angular** (Standalone Components, Feature-Based Architecture)
- **Tailwind CSS** (UI Styling)
- **Leaflet** (Map Rendering)
- **Angular Material** (Accordion, Snackbar, Icons)
- TypeScript

---

## Features

### Map-Based Work Inbox
- Interactive Leaflet map
- Region highlighting
- Clickable locations with popups
- Available job posts per region

### Job Post Page
- Map header preview
- Dynamic accordion sections
- Job metrics display
- Accept / Decline actions
- Success & decline snackbar notifications
- Sticky action bar

### Worklist
- Accepted jobs appear in worker's worklist

---

## 🛠 Requirements

- Node.js (LTS recommended)
- npm (comes with Node)
- Angular CLI

Install Angular CLI globally (if not installed):

```bash
npm install -g @angular/cli
```

## How To Run The Application


1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/acceptanceFlow_2.git
cd acceptanceFlow_2
```

2.  Install Dependencies

```bash
npm install
```

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Application Structure

The application follows a feature-based architecture:

```bash
src/app/
│
├── features/
│   ├── home/
│   │
│   └── work-package/
│       │
│       └── job-sheet/
│       │
│       └── job-post-sheet/
│
├── components/
│   ├── work-map/
│   │
│
├── state/
│   ├── 
└── app.routes.ts
```


## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
