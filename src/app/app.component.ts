import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ultimoId = 0;
  nome = 'Marcos';
  adicionado = false;
  funcionarios = [];

  adicionar(nomeInput: any){
  	console.log(`Adicionado ${this.nome} `);
   this.adicionado = true;
   this.funcionarios.push({
    id: ++this.ultimoId, 
    nome: this.nome
   });
    
   console.log("funcionario "+this.funcionarios);
  }

  alterarNome(event: any){
    this.nome = event.target.value;
  }
}
