import { Routes } from '@angular/router';
import { SobreNos } from './pages/sobre-nos/sobre-nos';
import { Cadastro } from './componentes/paginas/cadastro/cadastro';
import { Login } from './componentes/paginas/login/login';


export const routes: Routes = [
    { path: "", component: Login },
    { path: "login", component: Login },
    { path: 'cadastro', component: Cadastro},
    { path: 'sobre_nos', component: SobreNos},
];
