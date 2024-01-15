import { Injectable } from '@angular/core';
import { CrudService } from '../crud/crud.service';
import { BehaviorSubject, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false); //private behaviorsubject
  isLoggedIn$ = this._isLoggedIn$.asObservable(); //public login checking //Is Observable === can be subscribed to

  constructor(private crudService:CrudService, private jwtHelper: JwtHelperService, private router: Router) {
    const token = localStorage.getItem('sessiontoken');
    
    if(!(this.jwtHelper.isTokenExpired(token))) this._isLoggedIn$.next(!!token); //change loggedIn to true if token still not expired
    if(this.jwtHelper.isTokenExpired(token)){
      this.logout();
      this._isLoggedIn$.next(false);
    }
  }

  login(email:string, password:string){
    return this.crudService.login(email, password)
    .pipe(
      tap((res:any) => { 
        this.saveSession(res);
        this.router.navigate(['/']);
      })
    );
  }

  saveSession(res:any){
    if(!res.message){
      localStorage.setItem('sessiontoken', res.token);
      //console.log('Saved to local storage!\ntoken: ' + res.token);
      this._isLoggedIn$.next(true);
    }
    else if(res.message==='incorrect password') console.error(res.message);
    else if (res.message==='user not found') console.error(res.message);
  }

  isLoggedIn(): boolean{
    if(this._isLoggedIn$) return true;
    else if (!this._isLoggedIn$) return false;
    return false;
  }

  logout(){
    localStorage.clear();
    this._isLoggedIn$.next(false);
    this.router.navigate(['/login']);
    // console.log(this.authService.isLoggedIn());
    // if(!this.authService.isLoggedIn()) this.router.navigate(['welcome']);
  }
  /*
  login(data:any): Observable<any>{
    return this.http
    .post<any>(`${this._apiUrl}/login`, data, this.httpOptions)
    .pipe(
      map((res: any) => {
        // login successful if there's a jwt token in the response
        if (res && res.token) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          console.log(JSON.stringify(res));
          localStorage.setItem(
            'currentUser',
            JSON.stringify({ token: res.token, expiresAt: res.expiresAt }),
          );
        }
      }),
    );
  }
  

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }          

  logout() {
      localStorage.removeItem("id_token");
      localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration = localStorage.getItem("expires_at");
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
  } 
  */ 
}
