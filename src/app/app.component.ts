import { RouterOutlet } from '@angular/router';
import { PokemonService } from './services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { TableComponent } from './components/table/table.component';
import { Pokemon } from './models/pokemon';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent implements OnInit {
  title = "Pokemon";
  pokemon: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}
  
  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(data => {
      this.pokemon = data;
      console.log(data);
    });
  }
}
