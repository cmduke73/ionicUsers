import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'users', loadChildren: './users/users.module#UsersPageModule' },
  { path: 'user/:id', loadChildren: './user/user.module#UserPageModule' },
  { path: 'user-delete/:id', loadChildren: './user-delete/user-delete.module#UserDeletePageModule' },
  { path: 'user-edit/:id', loadChildren: './user-edit/user-edit.module#UserEditPageModule' },
  { path: 'user-create/:id', loadChildren: './user-create/user-create.module#UserCreatePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
