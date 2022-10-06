import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root' //root significa que está disponível para toda a aplicação
})
export class PensamentoService {

  constructor(private http: HttpClient) { }



}
