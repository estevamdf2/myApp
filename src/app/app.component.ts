import { Component } from '@angular/core';

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

}
