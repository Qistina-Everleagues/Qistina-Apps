import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private ngFireAuth: AngularFireAuth) { }

  registerUser(value) {
    return new Promise<any>((resolve, reject) => {

      this.ngFireAuth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })

  }

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.ngFireAuth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  logoutUser() {
    return new Promise<void>((resolve, reject) => {
      if (this.ngFireAuth.currentUser) {
        this.ngFireAuth.signOut()
          .then(() => {
            console.log("Log Out");
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    })
  }

  userDetails() {
    return this.ngFireAuth.user
  }
}
