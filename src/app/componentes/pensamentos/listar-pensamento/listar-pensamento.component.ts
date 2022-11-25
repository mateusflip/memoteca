import { Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { getLocaleDirection } from '@angular/common';

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
   favoritos: boolean = false
   listaFavoritos: Pensamento[] = []
   titulo: string = 'Meu Mural' //Titulo que setamos assim que o usuário clica na opção que deseja



  constructor(private service: PensamentoService,
              private router: Router) { }

  //O que queremos que seja executado assim que o componente inicia
  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

  carregarMaisPensamentos(){
    //Colocamos ++ ano listar pois vamos incrementar
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos)
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
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentos => {
        this.listaPensamentos = listaPensamentos
      })
  }

  recarregarComponente(){
    //recarregando um componente


    this.favoritos = false
    this.paginaAtual = 1

    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
    //location.reload(); recarrega toda a aplicação 
  }

  listarFavoritos(){
    this.titulo = 'Meus Favoritos'
    this.favoritos = true
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
    .subscribe(listaPensamentosFavoritos => {
      this.listaPensamentos = listaPensamentosFavoritos
      this.listaFavoritos = listaPensamentosFavoritos
    })
  }

}
