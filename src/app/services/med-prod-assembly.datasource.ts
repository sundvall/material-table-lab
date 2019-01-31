import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import MedProduct from '../shared/types/med-product.model';
import { catchError, finalize } from 'rxjs/operators';
import { MedProdService } from './med-prod.service';

export class MedProdAssembly implements DataSource<MedProduct> {
  private lessonsSubject = new BehaviorSubject<MedProduct[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private medProdService: MedProdService) {}

  loadProducts(
    courseId: number,
    filter = '',
    sortDirection = 'asc',
    pageIndex = 0,
    pageSize = 3
  ) {
    this.loadingSubject.next(true);

    this.medProdService
      .getDataFrom(courseId, filter, sortDirection, pageIndex, pageSize)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(lessons => this.lessonsSubject.next(lessons));
  }

  connect(collectionViewer: CollectionViewer): Observable<MedProduct[]> {
    console.log('Connecting data source');
    return this.lessonsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.lessonsSubject.complete();
    this.loadingSubject.complete();
  }
}
