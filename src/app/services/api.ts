import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API = environment.apiUrl;

  constructor(private http: HttpClient) {}

  listar(): Observable<any> {
    return this.http.get(this.API + 'listarUsuarios.php');
  }

  cadastrarUsuario(usuario: any): Observable<any> {
    return this.http.post(this.API + 'cadastrarUsuario.php', usuario);
  }
}
