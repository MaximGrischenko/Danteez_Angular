import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

import {LogService} from './log.service';
import {LoggedUserClass} from '../models/LoggedUserClass';

@Injectable({providedIn: 'root'})
export class AuthService {
  private apiEndPointUser = 'api/user';

  constructor(private http: HttpClient, private logService: LogService) {}

  private log(message: string) {
    this.logService.add('DataFromApiService: ' + message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getUser(): Observable<LoggedUserClass[]> {
    return this.http.get<LoggedUserClass[]>(this.apiEndPointUser)
      .pipe(
        tap(users => this.log(`fetched users`)),
        catchError(this.handleError('getUsers', []))
      );
  }
}
