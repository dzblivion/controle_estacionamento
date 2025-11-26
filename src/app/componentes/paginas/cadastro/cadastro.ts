import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api';

@Component({
  selector: 'app-cadastro',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  
  senhasDiferentes:boolean = false;
  
  constructor(private api: ApiService) {}
  
  cadastro = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    categoria: new FormControl('', Validators.required),
    senha: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmaSenha: new FormControl('', Validators.required)
  });

  submit() {
    if (this.cadastro.valid) {
      alert('enviando...');
      const dados = this.cadastro.value;

      this.api.cadastrarUsuario(dados).subscribe({
        next: (res: any) => alert("Usuário cadastrado: " + JSON.stringify(res)),
        error: (err: any) => alert("Erro: " + JSON.stringify(err)),
      });
    }
  }

  verificarSenhas(){
    
    let senha1 = this.cadastro.value.senha;
    let senha2 = this.cadastro.value.confirmaSenha;

    if(senha1 === senha2){
      this.senhasDiferentes = false;
      this.submit();
    }else{
      this.senhasDiferentes = true;
    }

  }

}
