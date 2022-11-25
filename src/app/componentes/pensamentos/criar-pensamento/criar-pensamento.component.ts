import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  formulario!: FormGroup;


  constructor(
    private service: PensamentoService,
    private router : Router,
    private formBuilder : FormBuilder
    ) { }


    //validators é para validarmos os campos como queremos
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
      Validators.required,
      Validators.pattern(/(.|\s)*\S(.|\s)*/)])], 
      autoria: ['',Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])],
      modelo:['modelo1'],
      favorito: [false]
    })
  }

  criarPensamento(){
    console.log(this.formulario.get('autoria')?.errors)
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(()=> {
        this.router.navigate(['/listarPensamento'])
      })
    }
    
  }

  cancelarPensamento(){
    alert("Cancelando o pensamento")
  }

  habilitarBotao():String{
    if(this.formulario.valid){
      return 'botao'
    }else{
      return 'botao__desabilitado'
    }
  }
}
