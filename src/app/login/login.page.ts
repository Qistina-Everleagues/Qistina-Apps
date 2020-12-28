import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  /* user = {
    email: '',
    password: ''
  } */

  validations_form: FormGroup;
  errorMessage: string = '';

  constructor(private router: Router, public ngFireAuth: AngularFireAuth, private navCtrl: NavController, private authService: AuthenticationService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };


  loginUser(value) {
    this.authService.loginUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.navCtrl.navigateForward('/tabs');
      }, err => {
        this.errorMessage = err.message;
      })
  }

  goToRegisterPage() {
    this.navCtrl.navigateForward('/register');
  }

  /* async login() {
    const user = await this.ngFireAuth.signInWithEmailAndPassword(this.user.email, this.user.password);

    console.log(user);

    if (user.user.email) {
      this.router.navigate(['/tabs']);
    } else {
      alert('login failed!');
    }
  } */

  /* async register() {
    const user = await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email, this.user.password);

    console.log(user);

    if (user.user.email) {
      alert('registeration successful!');
    } else {
      alert('registration failed!');
    }
  } */
}
