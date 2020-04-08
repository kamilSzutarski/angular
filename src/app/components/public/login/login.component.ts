import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import { Store } from '@ngxs/store';
import { LoginAction } from '../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  options: FormlyFormOptions = {}
  loginForm = new FormGroup({});
  loginFields: FormlyFieldConfig[] = [
    {
      key: 'login',
      type: 'input',
      templateOptions: {
        required: true,
        label: 'Login',
        type: 'password'
      },
      // expressionProperties: {
      //   focus: 'this.field.parent.key == 0'
      // }
    },
  ]

  constructor(public store: Store) { }

  ngOnInit() {
  }

  login(){
    this.store.dispatch(new LoginAction(this.loginForm.value.login))
    this.options.resetModel();
  }

  exit(){
    open(location+'#/', '_self').close();
  }
}
