import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
 // Utilizando css de arquivo externo
// styleUrls: ['./funcionario-card.component.css']

  /* Utilizando css no proprio componente 
    funciona como array de estilos */
    styles: [`
    .card-block {
      text-transform: uppercase;
      color: blue;
    }
  `]
})
export class FuncionarioCardComponent {

  // Input (decorador) permite fazer binding de objetos externos.
  @Input() funcionario: any;

  /* Uma forma de fazer
  getClassesCss(){
    return ['badge', 'badge-default'];
  }
  */

  isAdmin(){
    return this.funcionario.nome.startsWith('B');
  }


  getEstilosCartao(){
    return {
        'border-width.px': this.funcionario.id,
        backgroundColor: this.funcionario.id % 2 === 0 ? 'lightblue' : 'ligthgreen'
    };
  }

}
