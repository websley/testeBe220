import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {

  // Dados de para simular o teste
  public worksouts = [
    {id: 1, title: "Levantamento de Peso",stopped: true, img: "http://lorempixel.com.br/600/400?1"},
    {id: 2, title: "Yoga Experimental",stopped: false, img: "http://lorempixel.com.br/600/400?2"},
    {id: 3, title: "Musculaçao",stopped: false, img: "http://lorempixel.com.br/600/400?3"}
  ]

  constructor() {}

  /**
   * Retona array com os objetos das categorias de treino
   * @returns array Objetos
   */
  getWorkouts(){
    return this.worksouts;
  }
}
