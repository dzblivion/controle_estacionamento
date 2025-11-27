import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api';
import { __values } from 'tslib';

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
      const dados = this.cadastro.value;

      this.api.cadastrarUsuario(dados).subscribe({
        next: (res: any) => {
          if(res.status === "ok"){
            alert('Usuário cadastrado com sucesso!');
            this.cadastro.reset();
          }else if(res.status.includes("erro")){
            alert("Erro do servidor: " + res.status);
          }else{
            alert("Resposta inesperada: " +JSON.stringify(res));
          }
        },
        error: (err: any) => alert("Falha na comunicação com o servidor: " + console.error(err)),
      });
    }
  }

  verificarSenhas(){
    
    let senha1 = this.cadastro.value.senha;
    let senha2 = this.cadastro.value.confirmaSenha;

    if(senha2 === senha1){
      this.senhasDiferentes = false;
      this.cadastro.get('confirmaSenha')?.setErrors({invalid:false});
      if(this.cadastro.valid){
        this.submit();
      }

    }else{
      this.cadastro.get('confirmaSenha')?.setErrors({invalid:true});
      this.senhasDiferentes = true;
    }

  }

}
