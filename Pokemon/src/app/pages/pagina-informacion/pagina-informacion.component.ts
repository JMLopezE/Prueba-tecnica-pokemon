import { Component } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-informacion',
  standalone: true,
  imports: [],
  templateUrl: './pagina-informacion.component.html',
  styleUrl: './pagina-informacion.component.css'
})
export class PaginaInformacionComponent {
  pokemon: any = {}


  constructor (pokemonServ: PokemonService, rout:Router){
    const url = rout.url.split("/") [2]
    console.log(url)
    pokemonServ.getPokemon(url).subscribe({

      next: (value:any) => {
        
        this.pokemon = value
         
      },
      error: error => {
        console.log(error)
      }
     })
     console.log(this.pokemon)
  }

}
