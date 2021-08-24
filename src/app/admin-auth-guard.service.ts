import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import "rxjs/add/operator/switchMap"

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard //implements CanActivate
{

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(){
    this.auth.user$
      .switchMap(user => {
        return this.userService.get(user?.uid as string)
      })
      .subscribe(x => console.log(x))
  }
}
