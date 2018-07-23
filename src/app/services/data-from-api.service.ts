import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

import {LogService} from './log.service';
import {UserClass} from '../models/UserClass';
import {CompanyClass} from '../models/CompanyClass';
import {ProductClass} from '../models/ProductClass';
import {AdvertisementClass} from '../models/AdvertisementClass';

@Injectable({providedIn: 'root'})
export class DataFromApiService {
  private apiEndPointUsers = 'api/users';
  private apiEndPointCompanies = 'api/companies';
  private apiEndPointProducts = 'api/products';
  private apiEndPointAdvertisements = 'api/advertisements';

  constructor(private http: HttpClient, private logService: LogService) {
  }

  private log(message: string) {
    this.logService.add('DataFromApiService: ' + message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getUsers(): Observable<UserClass[]> {
    return this.http.get<UserClass[]>(this.apiEndPointUsers)
      .pipe(
        tap(users => this.log(`fetched users`)),
        catchError(this.handleError('getUsers', []))
      );
  }

  getCompanies(): Observable<CompanyClass[]> {
    return this.http.get<CompanyClass[]>(this.apiEndPointCompanies)
      .pipe(
        tap(companies => this.log(`fetched companies`)),
        catchError(this.handleError('getCompanies', []))
      );
  }

  getProducts(): Observable<ProductClass[]> {
    return this.http.get<ProductClass[]>(this.apiEndPointProducts)
      .pipe(
        tap(products => this.log(`fetched products`)),
        catchError(this.handleError('getProducts', []))
      );
  }

  getAdvertisements(): Observable<AdvertisementClass[]> {
    return this.http.get<AdvertisementClass[]>(this.apiEndPointAdvertisements)
      .pipe(
        tap(advertisements => this.log(`fetched advertisements`)),
        catchError(this.handleError('getAdvertisements', []))
      );
  }
}
