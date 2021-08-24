import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import "rxjs/add/operator/switchMap"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate
{

  constructor(private auth: AuthService, private userService: UserService) { }

    canActivate(): Observable<boolean> {
     return this.auth.appUser$
      .map((appUser: any) => appUser.isAdmin);
    }    
}