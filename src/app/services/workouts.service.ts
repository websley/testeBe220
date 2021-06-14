import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {

  public worksouts = [
    {title: "Levantamento de Peso",stopped: true, img: "http://lorempixel.com.br/600/400?1"},
    {title: "Yoga Experimental",stopped: false, img: "http://lorempixel.com.br/600/400?2"},
    {title: "Musculaçao",stopped: false, img: "http://lorempixel.com.br/600/400?3"}
  ]

  constructor() {}

  getWorkouts(){
    return this.worksouts;
  }
}
