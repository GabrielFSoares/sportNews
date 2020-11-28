import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(public ngFireAuth: AngularFireAuth) { }

  public user_id:string;

  loginFirebase(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  insereFirebase(email, password) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.ngFireAuth.signOut;
  }

  getUsuario() {
    return this.ngFireAuth.currentUser;
  }
}
