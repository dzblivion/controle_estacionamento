import { Routes } from '@angular/router';
import { SobreNos } from './pages/sobre-nos/sobre-nos';
import { Cadastro } from './pages/cadastro/cadastro';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';


export const routes: Routes = [
    { path: "", component: Login },
    { path: "login", component: Login },
    { path: 'cadastro', component: Cadastro},
    { path: 'sobre_nos', component: SobreNos},
    { path: 'dashboard', component: Dashboard},
];
