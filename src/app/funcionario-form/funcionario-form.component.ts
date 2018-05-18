import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FuncionarioService } from "./../funcionario.service";


@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']

})
export class FuncionarioFormComponent {

  corDoCampo = 'black';

  funcionarioService: FuncionarioService;
  //Decorator para saída de evento
  @Output() funcionarioAdicionado = new EventEmitter();

  constructor(){
    this.funcionarioService = new FuncionarioService();
  }

  adicionar(nome:string){
    console.log("metodo adiconar");
    console.log(nome);
  this.funcionarioService.adicionar(nome)	;

  }


}
