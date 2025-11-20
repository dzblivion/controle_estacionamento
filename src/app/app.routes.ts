import { Routes } from '@angular/router';
import { SobreNos } from './pages/sobre-nos/sobre-nos';
import { Home } from './componentes/paginas/home/home';


export const routes: Routes = [
    { path: '', component: Home},
    { path: 'sobre_nos', component: SobreNos}
];
