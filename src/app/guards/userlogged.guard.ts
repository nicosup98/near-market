import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { NearService } from '../services/near.service';

@Injectable({
  providedIn: 'root'
})
export class UserloggedGuard implements CanActivate {
  constructor(private nearService: NearService, private router: Router){}
  redirect(flag: boolean){
    if(!flag){
      this.router.navigateByUrl('/login')
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.nearService.isSignedIn().pipe(tap((isSignedIn)=>this.redirect(isSignedIn)))
  }
  
}
