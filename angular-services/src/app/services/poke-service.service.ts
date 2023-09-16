import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//exportei o environment pro service
import { environment } from 'src/environments/environment'
import { PokemonData } from 'src/app/models/pokemonData'

@Injectable({
  // aqui ele fala quem pode consumi-lo. como ta root, significa que ta injetando no babado todo, visto que o root é a raiz
  providedIn: 'root'
})
export class PokeServiceService {
  //CRIEI UMA PROPRIEDADE PRIVADA QUE NÃO SAI DESSA CLASSE
  private baseURL:string
  private pokeData:PokemonData | any


  constructor(private http:HttpClient) {
    //O THIS BASE URL VAI RECEBER A POKEAPI DO ENVIRONMENT
    this.baseURL =
    environment.pokeApi
  }

  getPokemon(pokemonName:string):Observable<PokemonData>{


    this.pokeData = this
                    .http
                    .get<PokemonData>
                    (`${this.baseURL}${pokemonName}`)
    return this.pokeData
  }

}
