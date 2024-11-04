import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { CustomFormatPipe } from '../../pipe/CustomFormatPipe';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
  standalone: true,
  imports: [CommonModule, CustomFormatPipe] // Importa el pipe standalone
})
export class PokeDetailsComponent implements OnInit {
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.pokemonService.getPokemonDetails(name).subscribe((data: any) => {
        this.pokemon = data;
      });
    }
  }
}