import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from './../common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  submitted = false;
  loginForm: FormGroup;
  user: any;
  constructor(private formBuilder: FormBuilder, private commonService: CommonService, private router: Router) {
    debugger;
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onClickSubmit(data: any) {
    debugger;
    this.submitted = false;
    if (this.loginForm.valid) {
      var value: any = "";
      let found = this.user.some(user => {
        if (user.userid == data.username && user.password == data.password) {
          value = user.username;
          console.log("userrrr"+value);
          return true;
        } else {
          return false;
        }
      });
      if (found) {
        this.commonService.loggedIn.next(true);
        this.commonService.loggedUserId.next(value);
        this.router.navigate(['/home']);
      } else {
        this.commonService.loggedIn.next(false);
        alert('Please Enter Valid Username and Password');
      }
    } else {
      alert('Please Enter Username and Password');
    }
  }

}
