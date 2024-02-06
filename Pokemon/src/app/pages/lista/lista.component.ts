import { Component } from '@angular/core';
import { PokemonListComponent } from "../../component/pokemon-list/pokemon-list.component";

@Component({
    selector: 'app-lista',
    standalone: true,
    templateUrl: './lista.component.html',
    styleUrl: './lista.component.css',
    imports: [PokemonListComponent]
})
export class ListaComponent {

}
