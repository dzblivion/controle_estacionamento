import { Component } from '@angular/core';
import { Header } from "../../componentes/layout/header/header";
import { Footer } from "../../componentes/layout/footer/footer";

@Component({
  selector: 'app-sobre-nos',
  imports: [Header, Footer],
  templateUrl: './sobre-nos.html',
  styleUrl: './sobre-nos.css',
})
export class SobreNos {

}
