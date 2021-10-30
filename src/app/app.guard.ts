import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
    providedIn: 'root'
})

export class AppGuard implements CanActivate {
    loggedUser: any;
    isLoggedIn$: Observable<boolean>;
    result: boolean = false;
    constructor(private router: Router, private commonService: CommonService) {
    }
    async canActivate(route: ActivatedRouteSnapshot) {
        this.isLoggedIn$ = this.commonService.isLoggedIn;
        await this.isLoggedIn$.subscribe(data => {
          console.log('am i logged in ', data);
          if(!data) {
            alert('ACCESS DENIED!');
            this.result = false;
            // this.router.navigate(['']);
            // return false;
          } else {
            this.result = true;
          }
         
        });
        return this.result;
    }

}
