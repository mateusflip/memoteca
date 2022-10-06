import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 1, 
    conteudo: 'Testando Angular',
    autoria: 'Mateus',
    modelo:'modelo1'
  }


  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento(){
    alert("Novo pensamento adicionado")
  }

  cancelarPensamento(){
    alert("Cancelando o pensamento")
  }
}
