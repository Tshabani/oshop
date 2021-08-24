import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app'
import { Observable } from 'rxjs';
import { AppUser } from './models/app-user';
import { UserService } from './user.service';
import "rxjs/add/operator/switchMap"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User | null>
  
  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router) {
    this.user$ = afAuth.authState
   }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/'
    localStorage.setItem('returnUrl', returnUrl)

    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    
  }

  logout(){
    this.afAuth.signOut().then(() =>{
      this.router.navigateByUrl('/login')
    })    
  }

  get appUser$():  Observable<AppUser | null>{
    return this.user$
    .switchMap(user => this.userService.get(user?.uid as string).valueChanges())
  }
}
