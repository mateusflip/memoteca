import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Configuração das rotas que temos na aplicação
const routes: Routes = [
  {
    //Caso usuário digite somente a ulr sem uma rota, ele será redirecionado
    path:'',
    redirectTo:'listarPensamento',
    pathMatch: 'full'
  },
  {
    path:'criarPensamento',
    component: CriarPensamentoComponent
  },
  {
    path:'listarPensamento',
    component:ListarPensamentoComponent
  },
  {
  path:'pensamentos/excluirPensamento/:id',
  component:ExcluirPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
