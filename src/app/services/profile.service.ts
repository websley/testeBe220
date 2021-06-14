import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profile = {
    name: "Leonardo Santos" ,
    nivel: "Roxo",
    cor: "#623ac7",
    foto: "http://lorempixel.com.br/150/150"
  };

  constructor() { }

  getProfile(){
    return this.profile;
  }
}
