import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthProvider {

  user: Observable<firebase.User>; 

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
   return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
  }

  login(email: string, password: string) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
  }

  signInWithFacebook() {
     return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
   }

  signInWithGoogle() {
     return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());  
    }

  signInWithGithub() {
    return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
   	}

  logout() {
    this.firebaseAuth.auth.signOut();
  	}

}

