import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


class Cliente {
  nome: string;
  email: string;
  profissao: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  funcionarios = [];

  //parametro funcionario passado pelo $ event no html
  aoAdicionar(funcionario){
    this.funcionarios.push(funcionario);
  }

  profissoes = ['Arquiteto', 'Engenheiro', 'Programador'];

  cliente = new Cliente();

  salvar(form: NgForm) {
    this.cliente.nome = form.value.primeiroNome;
    this.cliente.email = form.value.emailAddress;
    this.cliente.profissao = form.value.profissao;
    console.log(form);
    console.log(this.cliente);

    // reset dos campos
    form.reset();

    // reset com valores padrão
    // form.reset({ primeiroNome: 'Sebastião', profissao: ''});
  }

}
