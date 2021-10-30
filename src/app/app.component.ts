import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InsuredMine';
  constructor() {
    localStorage.setItem("user", JSON.stringify([{userid : "abc@media.com",password:"abc123","username":"tom"}, {userid : "def@media.com",password:"def123","username":"dick"}]));
  }
}
