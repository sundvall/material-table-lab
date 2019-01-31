import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import DataExample from '../shared/types/data-example.model';
/**
 * Get list of items from server.
 * ref:
 * https://github.com/angular/in-memory-web-api/blob/master/src/app/http-client-hero.service.ts
 */

@Injectable()
export class DataProdService {
  private url = 'https://tlvcodecamp-test.azurewebsites.net/api/v1/Medprod/';
  // private url = '/api/v1/Medprod/';
  // private url = '/some/endpoint/responseExample/';
  constructor(/*private http: HttpClient*/) {}

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
  // id: uber,
  // name = 'a',
  // filter = '',
  // sortOrder = 'asc',
  // pageNumber = 0,
  // pageSize = 3
  // getDataFrom(
  //     id: uber,
  //     name = 'a',
  //     filter = '',
  //     sortOrder = 'asc',
  //     pageNumber = 0,
  //     pageSize = 3
  //   ): Observable<MedProd[]> {
  getDataFrom(searchStr: string): Observable<DataExample[]> {
    // examplifies how to get the data where id matches the string
    // const params = new HttpParams().set('name', 'a');
    // .set('id', id.toString())
    // .set('filter', filter)
    // .set('sortOrder', sortOrder)
    // .set('pageSize', pageSize.toString())
    // .set('pageNumber', pageNumber.toString());
    // console.log('med-prod-service: getDataFrom', params);
    // return this.http
    //   .get<MedProd[]>(this.url)
    //   .pipe(catchError(this.handleError));
    const dataExample: DataExample[] = [
      {
        id: 1,
        name: 'response-1-name',
        info: 'Order 1 info'
      },
      {
        id: 2,
        name: 'response-2-name',
        info: 'Order 2 info'
      },
      {
        id: 3,
        name: 'response-3-name',
        info: 'Order 3 info'
      },
      {
        id: 4,
        name: 'response-4-name',
        info: 'Order 4 info'
      },
      {
        id: 5,
        name: 'response-5-name',
        info: 'Order 5 info'
      },
      {
        id: 6,
        name: 'response-6-name',
        info: 'Order 6 info'
      },
      {
        id: 7,
        name: 'response-7-name',
        info: 'Order 7 info'
      },
      {
        id: 8,
        name: 'response-8-name',
        info: 'Order 8 info'
      },
      {
        id: 9,
        name: 'response-9-name',
        info: 'Order 9 info'
      },
      {
        id: 10,
        name: 'response-10-name',
        info: 'Order 10 info'
      },
      {
        id: 12,
        name: 'response-12-name',
        info: 'Order 12 info'
      },
      {
        id: 13,
        name: 'response-13-name',
        info: 'Order 13 info'
      },
      {
        id: 14,
        name: 'response-14-name',
        info: 'Order 14 info'
      },
      {
        id: 15,
        name: 'response-15-name',
        info: 'Order 15 info'
      }
    ];

    return of(dataExample);
  }

  /*getDataFromName(name: string): Observable<MedProd[]> {
    // examplifies how to get the data with a query string
    const params = new HttpParams().set('name', name);
    return this.http
      .get<MedProd[]>(this.url, { params })
      .pipe(catchError(this.handleError));
  }*/
}
