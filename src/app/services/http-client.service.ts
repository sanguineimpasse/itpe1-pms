import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private apiUrl = environment.apiUrl; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept':'*/*',
    }),
  };

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/data`);
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/data`, data);
  }

  createUser(data: any): Observable<any> {
    return this.http
    .post<any>(`${this.apiUrl}/create/user`, data, this.httpOptions)
    .pipe(retry(0), catchError(this.handleError));
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
