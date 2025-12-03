import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './componentes/layout/header/header';
import { Footer } from './componentes/layout/footer/footer';
import { filter } from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header, 
    Footer, 
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Controle_Estacionamento');

   hideHeader = false;

    constructor(private router: Router) {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          const url = event.urlAfterRedirects;

          const rotasSemHeader = [
            '/dashboard'
          ];

          this.hideHeader = rotasSemHeader.includes(url);
        });
      }
}
