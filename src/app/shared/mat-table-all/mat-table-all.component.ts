import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MedProdService } from '../../services/med-prod.service';
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  tap,
  delay
} from 'rxjs/operators';
import { fromEvent, merge } from 'rxjs';
import { MedProdAssembly } from '../../services/med-prod-assembly.datasource';
import MedProduct from '../types/med-product.model';

@Component({
  selector: 'app-mat-table-all',
  templateUrl: './mat-table-all.component.html',
  styleUrls: ['./mat-table-all.component.scss']
})
export class MatTableAllComponent implements OnInit, AfterViewInit {
  medProduct: MedProduct;
  dataSource: MedProdAssembly;
  displayedColumns = ['seqNo', 'description', 'duration'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private medProdService: MedProdService
  ) {}

  ngOnInit() {
    this.medProduct = this.route.snapshot.data['products'];
    this.dataSource = new MedProdAssembly(this.medProdService);
    this.dataSource.loadProducts(1, '', 'asc', 0, 3);
    // this.dataSource.loadProducts(this.medProduct.id, '', 'asc', 0, 3);
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;

          this.loadProductPage();
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(tap(() => this.loadProductPage()))
      .subscribe();
  }

  loadProductPage() {
    // this.dataSource.loadProducts(
    //   this.medProduct.id,
    //   this.input.nativeElement.value,
    //   this.sort.direction,
    //   this.paginator.pageIndex,
    //   this.paginator.pageSize
    // );
    // this.dataSource.loadProducts(
    //   this.medProduct.id,
    //   this.input.nativeElement.value,
    //   this.sort.direction,
    //   this.paginator.pageIndex,
    //   this.paginator.pageSize
    // );
  }
}
