import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(private router: Router, private authService: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const user = {
      email: this.email!,
      password: this.password!
    }

    this.authService.loginUser(user).subscribe({
      next(res) {
        localStorage.setItem("authToken", res.data);
        window.location.href = "/home";
      },
      error(err) {
        console.log("Error ->", err);
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

}
