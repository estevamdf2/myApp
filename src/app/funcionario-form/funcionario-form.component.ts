import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']

})
export class FuncionarioFormComponent {

  corDoCampo = 'black';
  
  @Output() funcionarioAdicionado = new EventEmitter();

  constructor(){

  }

  adicionar(nome:string){
    console.log("metodo adiconar");
    console.log(nome);


  }


}
