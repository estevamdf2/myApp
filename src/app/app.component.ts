import { Component , OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CidadeService } from './cidade.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  cidades = [];

  construtor(private cidadeService: CidadeService){}

  ngOnInit(){
    this.cidadeService.consultar()
    .then(dados => {
      this.cidades = dados;
      console.log(this.cidades);
    })
  }
  //parametro funcionario passado pelo $ event no html
  aoAdicionar(nome: string){
    alert(nome);
  }

  excluir(id: number){
    alert(id);
  }

  atualizar(cidade: any){
    alert(JSON.stringify(cidade));
  }

}
