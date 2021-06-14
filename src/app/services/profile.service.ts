import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  // Dados para simulação
  private profile = {
    name: "Leonardo Santos" ,
    nivel: "Roxo",
    cor: "#623ac7",
    foto: "http://lorempixel.com.br/150/150"
  };

  constructor() { }

  /**
   * Retorna os dados de um perfil
   * @returns objetc
   */
  getProfile(){
    return this.profile;
  }
}
