import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

  cadastro = new FormGroup({
      nome : new FormControl('', Validators.required),
      email : new FormControl('', [Validators.required, Validators.email]),
      telefone : new FormControl(null, [Validators.required, Validators.pattern(/^\(\d{2}\)\s\d{4,5}-?\d{4}$/)])

    });

    submit(){
      if(this.cadastro.valid){
        alert("cadastro efetuado para:" + " \n" + "______________________\n" + this.cadastro.value.nome + "\n" + this.cadastro.value.email + "\n" + this.cadastro.value.telefone + "\n______________________\n" + "\n Enviar para o banco de dados!");
      }
    }
}
