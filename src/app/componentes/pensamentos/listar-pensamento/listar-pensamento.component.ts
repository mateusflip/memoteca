import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {


   listaPensamentos: Pensamento[]=[];
   paginaAtual: number = 1;
   haMaisPensamentos: boolean = true;
   filtro: string = '' //Filtro que usamos no campo de busca
  constructor(private service: PensamentoService) { }

  //O que queremos que seja executado assim que o componente inicia
  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

  carregarMaisPensamentos(){
    //Colocamos ++ ano listar pois vamos incrementar
    this.service.listar(++this.paginaAtual, this.filtro)
    .subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos);
      if(!listaPensamentos.length){
        this.haMaisPensamentos = false
      }
    })
  }

  pesquisarPensamentos(){
    this.haMaisPensamentos = true
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro)
      .subscribe(listaPensamentos => {
        this.listaPensamentos = listaPensamentos
      })
  }

}
