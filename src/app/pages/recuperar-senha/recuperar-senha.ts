import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-senha',
  imports: [ReactiveFormsModule],
  templateUrl: './recuperar-senha.html',
  styleUrl: './recuperar-senha.css',
})
export class RecuperarSenha {

  private http = inject(HttpClient);
  private router = inject(Router);

  recuperarSenha = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });


  onSubmit(){
    if(this.recuperarSenha.valid){
      this.http.post('http://localhost/backend/recuperarSenha.php', this.recuperarSenha.value).subscribe({
        next: (response: any) => {
          if(response.status === 'ok'){
            alert('Instruções para recuperação de senha foram enviadas para o seu email.');
            this.router.navigate(['/login']);
          } else {
            alert(response.mensagem);
          }
        }
      });
    }
  }
}