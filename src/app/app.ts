import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './componentes/layout/header/header';
import { Footer } from './componentes/layout/footer/footer';
import { Home } from './componentes/paginas/home/home';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header, 
    Footer, 
    Home
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Controle_Estacionamento');
}
