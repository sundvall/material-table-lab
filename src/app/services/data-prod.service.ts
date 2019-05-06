import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import DataExample from '../shared/types/data-example.model';
/**
 * This service may provide dynamic data from an endpoint.
 */

@Injectable()
export class DataProdService {
  private url = '/some/endpoint/responseExample/';
  constructor(private http: HttpClient) {}

  getDataFrom(searchStr: string): Observable<DataExample[]> {
    const url = `${this.url}${searchStr}`;
    console.log('get from url:', url);
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
}
