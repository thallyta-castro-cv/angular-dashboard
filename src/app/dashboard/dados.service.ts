import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    ['Janeiro', 4],
    ['Fevereiro', 6],
    ['Março', 5],
    ['Abril', 7],
    ['Maio', 4],
    ['Junho', 8]
  ]

  constructor() { }

  obterDados(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.dados);
      observable.complete();
    });
  }
}
