# MaterialTable

An implementation of angular gui-components to display dynamic data to a readymade table.

The code follows the example of [https://blog.angular-university.io/angular-material-data-table/](https://blog.angular-university.io/angular-material-data-table/)

## TLDR

Readymade gui-components for dynamic tables are imported from 'angular-material' and connected to hardcoded data that may be replaced with dynamic data.

## Usage

```cmd
yarn
ng serve
```

Open http://localhost:4200 and read console output.

## The setup
The dependencies to material are collected into a module and imported to the app.module.ts. 
```javascript
imports: [
    // ...
    MaterialCollectionModule,
    MatInputModule,
    // ...
  ],
```

... where the MaterialCollectionModule imports selected components from the angular-material package.
```javascript
// src/app/shared/material-collection.module.ts
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatButtonModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule
  ]
})
```
### Component connected to 'dataSource'
The 'mat-table-all.component.ts' connects to a 'datasource.ts' and creates the template.
```javascript 
// mat-table-all.component.html
...
<mat-table class="lessons-table mat-elevation-z8" [dataSource]="dataSource">
...
```
Where 'dataSource' connects to the service proving content for the table.
```javascript 
// mat-table-all.component.ts
import { DataProdSrc } from '../../services/data-prod-src.datasource';
/* ...
... */
export class MatTableAllComponent implements OnInit, AfterViewInit {
  dataSource: DataProdSrc;
```
The 'dataSource' may connect to any endpoint.
```javascript
// This method returns an asynchronous response
getDataFrom(searchStr: string): Observable<DataExample[]> { ...
```
## General usage:

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
