import { Component, OnInit, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Asegura HttpClientModule

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    HttpClientModule // Agrega HttpClientModule aquí
  ]
})
export class TableComponent implements OnInit {
  pokemonList: any[] = [];
  favorites: Set<string> = new Set();

  private pokemonService = inject(PokemonService);
  private router = inject(Router);

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((response: any) => {
      this.pokemonList = response.results;
    });
  }

  toggleFavorite(name: string): void {
    if (this.favorites.has(name)) {
      this.favorites.delete(name);
    } else {
      this.favorites.add(name);
    }
  }

  viewDetails(name: string): void {
    this.router.navigate(['/pokemon', name]);
  }
}