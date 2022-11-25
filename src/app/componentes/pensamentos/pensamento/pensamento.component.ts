import { PensamentoService } from './../pensamento.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  //Anotação input diz que a propriedade pensamento vai receber informações do componente pai
  // dois pontos a frente de pensamento é a assinatura da interface "Pensamento"
  @Input()
  pensamento: Pensamento ={
    id: 0,
    conteudo: 'Eu gosto de Angular',
    autoria: 'Mateus',
    modelo: 'modelo3', 
    favorito: false
  }

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
  }

  //iniciando uma função que retorna uma string
  //Método para trocar a classe css de forma condicional
  larguraPensamento(): string{
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorito(): string{
    if(this.pensamento.favorito == false){
      return 'inativo'
    }
    return 'ativo'
  }

  atualizarFavoritos(){
    this.service.mudarFavorito(this.pensamento).subscribe();
    console.log(this.pensamento.favorito)
  }

}
