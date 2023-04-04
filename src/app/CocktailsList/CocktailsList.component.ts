import { Component } from '@angular/core';
import { CocktailService } from '../Cocktail.service';
@Component({
  selector: 'app-CocktailsList',
  templateUrl: './CocktailsList.component.html',
  styleUrls: ['./CocktailsList.component.css'],
})
export class CocktailsListComponent {
  cocktails?: any;
  constructor(public cocktailService: CocktailService) {
    this.cocktails = cocktailService.getCocktails();
  }
}
