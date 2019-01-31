import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import MedProd from '../shared/types/med-product.model';
/**
 * Get list of items from server.
 * ref:
 * https://github.com/angular/in-memory-web-api/blob/master/src/app/http-client-hero.service.ts
 */

@Injectable()
export class MedProdService {
  private url = 'https://tlvcodecamp-test.azurewebsites.net/api/v1/Medprod/';
  // private url = '/api/v1/Medprod/';
  // private url = '/some/endpoint/responseExample/';
  constructor(private http: HttpClient) {}

  private handleError(error: any) {
    console.error('example.service: An error occurred', error); // for demo purposes only
    return throwError(error);
  }

  /*getMedProd(): Observable<MedProd[]> {
    return this.http
      .get<MedProd[]>(this.url)
      .pipe(catchError(this.handleError));
  }*/

  // med-prod-MedProdAssembly.datasource
  // courseId: number,
  // filter: string,
  // sortDirection: string,
  // pageIndex: number,
  // pageSize: number

  // med-prod-service.getDataFrom({ courseId, filter, sortDirection, pageIndex, pageSize })
  // id: number,
  // name = 'a',
  // filter = '',
  // sortOrder = 'asc',
  // pageNumber = 0,
  // pageSize = 3
  // getDataFrom(
  //     id: number,
  //     name = 'a',
  //     filter = '',
  //     sortOrder = 'asc',
  //     pageNumber = 0,
  //     pageSize = 3
  //   ): Observable<MedProd[]> {
  getDataFrom(
    courseId: number,
    filter: string,
    sortDirection: string,
    pageIndex: number,
    pageSize: number
  ): Observable<MedProd[]> {
    // examplifies how to get the data where id matches the string
    // const params = new HttpParams().set('name', 'a');
    // .set('id', id.toString())
    // .set('filter', filter)
    // .set('sortOrder', sortOrder)
    // .set('pageSize', pageSize.toString())
    // .set('pageNumber', pageNumber.toString());
    // console.log('med-prod-service: getDataFrom', params);
    return this.http
      .get<MedProd[]>(this.url)
      .pipe(catchError(this.handleError));
  }

  /*getDataFromName(name: string): Observable<MedProd[]> {
    // examplifies how to get the data with a query string
    const params = new HttpParams().set('name', name);
    return this.http
      .get<MedProd[]>(this.url, { params })
      .pipe(catchError(this.handleError));
  }*/
}
