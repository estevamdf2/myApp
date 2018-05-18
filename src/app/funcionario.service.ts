export class FuncionarioService {

  ultimoId = 1;
  funcionarios = [
    {id: 1, nome: "João"}
  ];

  adicionar(nome){
    const funcionario = {
      id: ++this.ultimoId,
      nome: nome;
    };

    this.funcionarios.push(funcionario);
    console.log(this.funcionarios);

  }

  consultar(){
    return this.funcionarios;
  }

}
