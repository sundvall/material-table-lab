import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataProdService } from '../../services/data-prod.service';
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  tap,
  delay
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
    this.dataExample = this.route.snapshot.data['products'];
    this.dataSource = new DataProdSrc(this.dataProdService);
    this.dataSource.loadProducts('a');

    console.log('mat-table-all: this.dataExample', this.dataExample);
    // this.dataSource.loadProducts(this.dataExample.id, '', 'asc', 0, 3);
  }

  ngAfterViewInit() {
    // this.paginator.page.pipe(tap(() => this.loadProductPage())).subscribe();

    /*this.paginator.page
    .pipe(
        tap(() => this.loadProductPage  ())
    )
    .subscribe();*/

    /*this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));*/

    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          // this.paginator.pageIndex = 0;
          const searchStr: string = this.input.nativeElement.value;
          this.loadProductPage(searchStr);
        })
      )
      .subscribe();
    /*
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(tap(() => this.loadProductPage()))
      .subscribe();
      */
  }

  loadProductPage(searchStr) {
    // this.dataSource.loadProducts(
    //   this.dataExample.id,
    //   this.input.nativeElement.value,
    //   this.sort.direction,
    //   this.paginator.pageIndex,
    //   this.paginator.pageSize
    // );
    console.log(
      'this.input.nativeElement.value,:',
      this.input.nativeElement.value
    );
    this.dataSource.loadProducts(searchStr);
    // this.dataSource.loadProducts(
    //   this.dataExample.id,
    //   this.input.nativeElement.value,
    //   this.sort.direction,
    //   this.paginator.pageIndex,
    //   this.paginator.pageSize
    // );
  }

  onRowClicked(row) {
    console.log('clicked: row;', row);
  }
}
