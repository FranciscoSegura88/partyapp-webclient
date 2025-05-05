import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { UsertypeComponent } from './pages/usertype/usertype.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { GroupRegisterComponent } from './pages/group-register/group-register.component';
import { HomeUsuarioComponent } from './pages/home-usuario/home-usuario.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'usertype', component: UsertypeComponent},
  {path: 'usertype/user', component: UserRegisterComponent},
  {path: 'usertype/group', component: GroupRegisterComponent},
  {path: 'home', component: HomeUsuarioComponent},
];
