import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  private API = "http://localhost/backend/";

  constructor (private http: HttpClient) {};

  listar(): Observable<any>{
    return this.http.get(this.API + "listar.php");
  }

  cadastrarUsuario(produto: any): Observable<any>{
    return this.http.post(this.API + "cadastrarUsuario.php", produto);
  }

}
