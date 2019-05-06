import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort } from '@angular/material';
import { DataProdService } from '../../services/data-prod.service';
import {
  debounceTime,
  distinctUntilChanged,
  tap
} from 'rxjs/operators';
import { fromEvent, merge } from 'rxjs';
import { DataProdSrc } from '../../services/data-prod-src.datasource';
import DataExample from '../types/data-example.model';

@Component({
  selector: 'app-mat-table-all',
  templateUrl: './mat-table-all.component.html',
  styleUrls: ['./mat-table-all.component.scss']
})
export class MatTableAllComponent implements OnInit, AfterViewInit {
  dataExample: DataExample;
  dataSource: DataProdSrc;
  displayedColumns = ['id', 'name', 'info'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private dataProdService: DataProdService
  ) {}

  ngOnInit() {
    // By default the component requests a list of products from 'a'.
    this.dataExample = this.route.snapshot.data['products'];
    this.dataSource = new DataProdSrc(this.dataProdService);
    this.dataSource.loadProducts('a');
    console.log('mat-table-all: this.dataExample', this.dataExample);
  }

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          const searchStr: string = this.input.nativeElement.value;
          this.loadProductPage(searchStr);
        })
      )
      .subscribe();
  }

  loadProductPage(searchStr) {
    console.log(
      'mat-table-all:loadProductPate: this.input.nativeElement.value,:',
      this.input.nativeElement.value
    );
    this.dataSource.loadProducts(searchStr);
  }

  onRowClicked(row) {
    console.log('clicked: row;', row);
  }
}
