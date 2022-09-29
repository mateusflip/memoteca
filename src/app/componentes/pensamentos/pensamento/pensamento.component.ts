import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  //Anotação input diz que a propriedade pensamento vai receber informações do componente pai
  @Input()
  pensamento ={
    conteudo: 'Eu gosto de Angular',
    autoria: 'Mateus',
    modelo: 'modelo3'
  }

  constructor() { }

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

}
