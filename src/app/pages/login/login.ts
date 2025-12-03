import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private http = inject(HttpClient);
  private router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required]),
  });

  submit() {
    if (this.loginForm.valid) {
      this.http.post('http://localhost/backend/login.php', this.loginForm.value).subscribe({
        next: (response: any) => {
          if (response.status === 'ok') {
            localStorage.setItem('usuario', JSON.stringify(response.usuario));

            this.router.navigate(['/dashboard']);

            console.log('Login realizado com sucesso!', response.usuario);
          } else {
            alert(response.mensagem);
          }
        },
        error: (erro) => {
          alert('Erro ao conectar com o servidor');
          console.error('Erro:', erro);
        },
      });
    } else {
      alert(this.loginForm.valid + ' Por favor, preencha todos os campos corretamente');
    }
  }
}
