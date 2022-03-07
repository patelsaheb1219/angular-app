import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name!: string;
  email!: string;
  telephone!: string;
  role!: string;
  password!: string;
  confirmPassword!: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() { 
    if (this.password !== this.confirmPassword) {
      alert("Password and Confirm Password aren't match");
    }
    
    const user = {
      name: this.name!,
      email: this.email!,
      telephone: this.telephone!,
      role: this.role!,
      password: this.password!,
    }

    this.authService.registerUser(user).subscribe({
      next(res) {
        console.log("res ->", res);
      },
      error(err) {
        console.error(err);
      }
    })
  }

}
