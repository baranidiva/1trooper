import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../common.service';
import { Subscription } from 'rxjs';
import { AppGuard } from '../app.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subscription: Subscription;
  isLoggedIn$: Observable<boolean>;
  isLoggedUser$: Observable<String>;
  user: any;
  isLoggedIn: boolean = false;
  loggedUserName: String = "";
  constructor(private commonService: CommonService,private router: Router,
    private route: ActivatedRoute,
    private canActivateGuard: AppGuard) { 
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit(): void {
    debugger;
    this.isLoggedIn$ = this.commonService.isLoggedIn;
    this.subscription = this.isLoggedIn$.subscribe(data => {
      console.log('am i logged in ', data);
      this.isLoggedIn = data;
      if(this.isLoggedIn) {
          this.isLoggedUser$ = this.commonService.isloggedUserId;
      }
    });
    // this.commonService.loggedUserId.next(value);
    // alert(this.subscription);
  }

  async logout() {
    await this.router.navigate(['']); 
    this.commonService.loggedIn.next(false);
    // this.canActivateGuard.canActivate(
    //   this.route.snapshot,
    //   this.router.routerState.snapshot);
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
