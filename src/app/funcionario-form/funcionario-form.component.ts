import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  ultimoId = 0;
  nome = 'Marcos';
  adicionado = false;
  //Decorator para saída de evento
  @Output() funcionarioAdicionado = new EventEmitter();

  adicionar(nomeInput: any){
  	
   this.adicionado = true;
   const funcionario = {
      id: ++this.ultimoId, 
      nome: this.nome
   };
   
   //Passa o funcionário para o app.component.ts
   this.funcionarioAdicionado.emit(funcionario);
   
  }
  

}
