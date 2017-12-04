import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent {

  //Input (decorador) permite fazer binding de objetos externos.
  @Input() funcionario: any;
//funcionario = {id: 1, nome: 'Joana'};

}
