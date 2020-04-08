import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedMenuComponent } from './logged-menu/logged-menu.component';
import { AuthGuard } from './auth.guard';
import { NgxsModule } from '@ngxs/store';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: 'menu',
    component: LoggedMenuComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [LoggedMenuComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [
    AuthGuard
  ]
})
export class LoggedModule { }
