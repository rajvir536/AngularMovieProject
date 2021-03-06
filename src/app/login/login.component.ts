import { DataStorageService } from './../data-storage.service';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private httpService: HttpService, private router: Router,
    private dataStorage: DataStorageService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get userName() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }

  loginSubmit() {
    this.httpService.loginUser(new User(this.userName.value, this.password.value)).subscribe(userDetails => {
      console.log(userDetails);
      this.dataStorage.data = userDetails;
      this.router.navigate(['/home'], { queryParams: {user: this.userName.value}});
    });
  }
}
