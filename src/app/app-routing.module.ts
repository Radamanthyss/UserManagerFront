import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './Pages/user/user.component';
import { UserEditComponent } from './Pages/user-edit/user-edit.component';
import { UserCreateComponent } from './Pages/user-create/user-create.component';

const routes: Routes = [
  { path: '', component: UserComponent, title: 'Gerenciar Usuários' },
  {
    path: 'usuario/add',
    component: UserCreateComponent,
    title: 'Cadastrar Usuário',
  },
  {
    path: 'usuario/:id/editar',
    component: UserEditComponent,
    title: 'Editar Usuário',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
