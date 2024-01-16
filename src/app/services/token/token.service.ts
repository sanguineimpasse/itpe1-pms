import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private jwtHelper: JwtHelperService) { }

  getRole(): string{
    const token = localStorage.getItem('sessiontoken');
    var decodedToken:any = null;
    var userRole = null;

    if(!!token){
      decodedToken = this.jwtHelper.decodeToken(token);
      userRole = decodedToken.role;
      //console.log('decodedTokenRole: ' + decodedToken.role + '\nis: ' + typeof decodedToken.role);
      return userRole;
    }

    return 'invalid session';
  }

  getName(): string{
    const token = localStorage.getItem('sessiontoken');
    var decodedToken:any = null;
    var userFullName = null;

    if(!!token){
      decodedToken = this.jwtHelper.decodeToken(token);
      userFullName = `${decodedToken.lastname}, ${decodedToken.firstname}`;
      //console.log('decodedTokenName: ' + userFullName + '\nis: ' + typeof userFullName);
      return userFullName;
    }

    return 'invalid session';
  }

  getEmail(): string{
    const token = localStorage.getItem('sessiontoken');
    var decodedToken:any = null;
    var userEmail = null;

    if(!!token){
      decodedToken = this.jwtHelper.decodeToken(token);
      userEmail = decodedToken.email;
      //console.log('decodedEmail: ' + userEmail + '\nis: ' + typeof userEmail);
      return userEmail;
    }

    return 'invalid session';
  }

  getUserCode(): string{
    const token = localStorage.getItem('sessiontoken');
    var decodedToken:any = null;
    var userCode = null;

    if(!!token){
      decodedToken = this.jwtHelper.decodeToken(token);
      userCode = decodedToken.userCode;
      //console.log('decodedUserCode: ' + userCode + '\nis: ' + typeof userCode);
      return userCode;
    }

    return 'invalid session';
  }
}
