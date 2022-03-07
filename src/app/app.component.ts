import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;

  constructor(
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    if (localStorage.getItem("authToken") || null) {
      this.isLoggedIn = true;
      this.router.navigate(['/home']);
    } else {
      this.isLoggedIn = false;
      this.router.navigate(['/login']);
    }
  }

  logoutUser() {
    localStorage.removeItem("authToken");
    this.initializeApp();
  }
}
