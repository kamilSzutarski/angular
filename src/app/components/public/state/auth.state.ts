import { State, Action, StateContext, Selector } from '@ngxs/store';
import { LoginAction, GetCurrentUserAction } from './auth.actions';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Navigate } from '@ngxs/router-plugin';
import { Operator } from 'src/app/api/models';
import { OperatorControllerService } from 'src/app/api/services';
import { Injectable } from '@angular/core';

export class AuthStateModel {
  public token: String
  public operator: Operator
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
    operator: null
  }
})

@Injectable()
export class AuthState {
  constructor(public httpClient: HttpClient, public operatorController: OperatorControllerService) { }

  @Selector()
  static getToken(authStateMode: AuthStateModel){
    return authStateMode.token;
  }

  @Selector()
  static getOperator(authStateMode: AuthStateModel){
    return authStateMode.operator;
  }

  @Action(GetCurrentUserAction)
  getCurrentUser(ctx: StateContext<AuthStateModel>, {login}: GetCurrentUserAction){
    return this.operatorController.getOperatorUsingGET(login)
    .pipe(tap(x => ctx.patchState({operator: x}))); //do usera przypisuje wartosc
  }

  @Action(LoginAction)
  login(ctx: StateContext<AuthStateModel>, { login }: LoginAction) {
    const formData = new FormData();
    formData.append('login', login)
    return this.httpClient.post<{ token }>('http://localhost:8080/login', formData, {}).pipe(
      tap(({ token }) => { 
        ctx.patchState({token:token});
        ctx.dispatch(new GetCurrentUserAction(login))
        ctx.dispatch(new Navigate(['/menu']));
      })
    )
  }
}
