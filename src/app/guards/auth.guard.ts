import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

export const layoutGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const session:boolean = !!localStorage.getItem('sessiontoken');
  const router : Router = inject(Router);
  const protectedRoutes: string[] = [
    '',
    '/dashboard',
    '/accounts/',
    '/appointments',
    '/prescriptions',
    '/profile',
    '/user-settings',
    '/settings/admin',
    '/settings'

  ];
  
  //console.log('session exist: ' + session);
  //console.log('state.url: ' + state.url);

  //console.log(`should redirect?: ${protectedRoutes.includes(state.url) && !session ? true : false}`);
  return protectedRoutes.includes(state.url) && !session ? router.navigate(['login']) : true;
};

export const loggedOutGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const session:boolean = !!localStorage.getItem('sessiontoken');
  const router : Router = inject(Router);
  const protectedRoutes: string[] = [
    '/login',
    '/register',
    '/welcome'
  ];
  
  //console.log('session exist: ' + session);
  //console.log('state.url: ' + state.url);

  //console.log(`should redirect?: ${protectedRoutes.includes(state.url) && !!session ? true : false}`);
  return protectedRoutes.includes(state.url) && !!session ? router.navigate(['dashboard']) : true;
};

