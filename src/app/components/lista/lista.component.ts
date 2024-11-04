import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  standalone: true, 
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  pokemons: any[] = [];
  favorites: Set<string> = new Set();


  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data: any) => {
      this.pokemons = data.results;
    });
  }

  constructor(private router: Router, private pokemonService: PokemonService) {}
  viewDetails(name: string): void {
    this.router.navigate(['/pokemon', name]);
  }

  toggleFavorite(pokemon: any): void {
    if (this.favorites.has(pokemon.name)) {
      this.favorites.delete(pokemon.name);
    } else {
      this.favorites.add(pokemon.name);
    }
  }

  isFavorite(pokemon: any): boolean {
    return this.favorites.has(pokemon.name);
  }
}
