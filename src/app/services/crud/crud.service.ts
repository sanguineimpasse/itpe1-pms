import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private _apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept':'*/*',
    }),
  };

  getData(): Observable<any> {
    return this.http.get<any>(`${this._apiUrl}/data`);
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this._apiUrl}/data`, data);
  }

  createUser(data: any): Observable<any> {
    return this.http
    .post<any>(`${this._apiUrl}/create/user`, data, this.httpOptions)
    .pipe(retry(0), catchError(this.handleError));
  }

  checkUserCode(data:any): Observable<any>{
    return this.http
    .post<any>(`${this._apiUrl}/verify/usercode`, data, this.httpOptions)
    .pipe(retry(0), catchError(this.handleError));
  }

  login(email:string, password:string): Observable<any>{
    return this.http
    .post<any>(`${this._apiUrl}/login`, {email, password}, this.httpOptions)
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message} ${error.status === 0 ? '\n(Perhaps the backend server is not running)' : '' }`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
