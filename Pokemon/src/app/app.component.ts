import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PokemonListComponent } from "./component/pokemon-list/pokemon-list.component";
import { NabVarComponent } from "./component/nav-bar/nab-var.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, PokemonListComponent, NabVarComponent]
})
export class AppComponent {
  title = 'Pokemon';
}
