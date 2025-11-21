import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

  cadastro = new FormGroup({
      nome : new FormControl('', Validators.required),
      email : new FormControl('', [Validators.required, Validators.email]),
      telefone : new FormControl<string>('', [Validators.required, Validators.pattern(/^\(\d{2}\)\s\d{4,5}-?\d{4}$/)])

    });

    submit(){
      if(this.cadastro.valid){
        alert("cadastro efetuado para:" + " \n" + "______________________\n" + this.cadastro.value.nome + "\n" + this.cadastro.value.email + "\n" + this.cadastro.value.telefone + "\n______________________\n" + "\n Enviar para o banco de dados!");
      }
    }

    formatar() {
    const control = this.cadastro.get('telefone');
    let valor = control?.value || '';
    valor = valor.replace(/\D/g, '');

    valor = valor.substring(0, 11);

    if (valor.length > 6) {
      // (XX) XXXXX-XXXX
      valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (valor.length > 2) {
      // (XX) XXXXX
      valor = valor.replace(/(\d{2})(\d+)/, '($1) $2');
    } else if (valor.length > 0) {
      // (XX
      valor = valor.replace(/(\d{0,2})/, '($1');
    }

    control?.setValue(valor, { emitEvent: false });
  }

}
