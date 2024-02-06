import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../model/pokemon';
import { PokemonService } from '../../service/pokemon.service';
import { CommonModule } from '@angular/common';
import { __values } from 'tslib';
import { RouterLink, RouterModule, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, RouterLinkActive],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  
  pokemon: any = [];
  pokemonOrganizado:  any= [];


  constructor ( private pokemonService: PokemonService) {
    
    for (let i = 1; i < 11; i ++ ) {

      this.pokemonService.getPokemon(i.toString()).subscribe({

        next: (value:any) => {
          
          this.pokemon.push(value)
           
        },
        error: error => {
          console.log(error)
        }
       })
      }

      this.pokemonOrganizado = this.pokemon.sort((a:any, b:any) => a.weight - b.weight )
      console.log(this.pokemonOrganizado)
    }
  }
  
  
