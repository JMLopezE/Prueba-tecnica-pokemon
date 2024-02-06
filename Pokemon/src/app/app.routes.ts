import { Routes } from '@angular/router';
import { PaginaInformacionComponent } from './pages/pagina-informacion/pagina-informacion.component';
import { ListaComponent } from './pages/lista/lista.component';

export const routes: Routes = [
        {path: "informacion/:id", component:PaginaInformacionComponent},
        {path: "listaPokemon", component:ListaComponent} 
];
