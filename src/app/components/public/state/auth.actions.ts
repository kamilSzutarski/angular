export class LoginAction {
  static readonly type = '[Auth] LoginAction';
  constructor(public login: string) { }
}

export class GetCurrentUserAction {
  static readonly type = '[Auth] GetCurrentUserAction';
  constructor(public login: string) { }
}