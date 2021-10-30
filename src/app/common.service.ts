import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loggedUserId: BehaviorSubject<String> = new BehaviorSubject<String>("");
  constructor() { }
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  get isloggedUserId() {
    return this.loggedUserId.asObservable();
  }
}
