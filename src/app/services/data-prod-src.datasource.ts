import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import DataExample from '../shared/types/data-example.model';
import { catchError, finalize } from 'rxjs/operators';
import { DataProdService } from './data-prod.service';

export class DataProdSrc implements DataSource<DataExample> {
  private dataExampleBehaviourSubject = new BehaviorSubject<DataExample[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private dataProdService: DataProdService) {}

  loadProducts(searchStr) {
    console.log('data-prod-src:search:', searchStr);
    this.loadingSubject.next(true);
    this.dataProdService
      .getDataFrom(searchStr)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(dataExamples =>
        this.dataExampleBehaviourSubject.next(dataExamples)
      );
  }

  connect(collectionViewer: CollectionViewer): Observable<DataExample[]> {
    console.log('data-prod-src:connect: Connecting data source');
    return this.dataExampleBehaviourSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.dataExampleBehaviourSubject.complete();
    this.loadingSubject.complete();
  }
}
