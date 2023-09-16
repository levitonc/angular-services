import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokeServiceService } from 'src/app/services/poke-service.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    pokemon:PokemonData



  constructor(
    private service:PokeServiceService) {
      this.pokemon = {
          id: 0,
          name: '',
          sprites: {
            front_default: ''
          },
          types:{
            slot: 0,
            type: {
              name: '',
              url: ''
            }
        }

    }
  }
  ngOnInit(): void {
    this.getPokemon("pikachu");
  }


    getPokemon(searchName:string){
      this.service.getPokemon(searchName).subscribe{
        next: (res) => {

          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }
                console.log(res.types)
                console.log(this.pokemon)
              },

        error: (err: any) => console.log(err)

    }

}
}
