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

  constructor(private cidadeService: CidadeService){}

  ngOnInit(){
    this.consultar();
  }

  consultar(){
    this.cidadeService.consultar()
    .then(dados => {
      this.cidades = dados;
      console.log(this.cidades);
    })
    .catch(error =>{
      alert(error); //Retorna a mensagem definida no Promise.reject
    });
  }

  //parametro funcionario passado pelo $ event no html
  adicionar(nome: string){
    this.cidadeService.adicionar({nome})
     .then(cidade => {
      alert(`Cidade "${cidade.nome} " adicionada com código ${cidade.id}! `);

      //chamar apos criar a cidade
      this.consultar();
     });

     
  }

  excluir(id: number){
    this.cidadeService.excluir(id)
     .then(cidade => {
      alert('Cidade excluída com sucesso !');
      
      //chamar apos criar a cidade
      this.consultar();
     });
  }

  atualizar(cidade: any){
    this.cidadeService.adicionar({cidade})
     .then(c => {
      alert(`Cidade ${cidade.nome}  alterada com sucesso! `);

      //chamar apos criar a cidade
      this.consultar();
     });
  }

}
