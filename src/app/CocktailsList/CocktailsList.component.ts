import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../Cocktail.service';
import { Cocktail } from '../models/cocktail.model';
@Component({
  selector: 'app-CocktailsList',
  templateUrl: './CocktailsList.component.html',
  styleUrls: ['./CocktailsList.component.css'],
})
export class CocktailsListComponent implements OnInit {
  cocktails: Cocktail[] = [];

  constructor(public cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe((cocktailsFromJsonFile) => {
      this.cocktails = cocktailsFromJsonFile;
    });
  }
}
