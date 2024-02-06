import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }
  apiUrl = "https://pokeapi.co/api/v2/pokemon/"


  getPokemon(indice:string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl + indice)
  }

}



