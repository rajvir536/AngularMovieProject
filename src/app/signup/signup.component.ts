import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private httpService: HttpService) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get userName() {
    return this.signupForm.get('userName');
  }

  get password() {
    return this.signupForm.get('password');
  }

  signupSubmit() {
    this.httpService.addUser(new User(this.userName.value, this.password.value)).subscribe();
  }
}
