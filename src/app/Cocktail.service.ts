import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  cocktail: Array<{ name: string; prix: number; image: string }> = [
    {
      name: 'Morito',
      prix: 6,
      image: '../assets/cocktai.jpg',
    },
    {
      name: 'Margarita',
      prix: 8.5,
      image: '../assets/marga.jpg',
    },
    {
      name: 'Piña Colada',
      prix: 12,
      image: '../assets/pina.jpg',
    },
    {
      name: 'Sex on the beach',
      prix: 22,
      image: '../assets/sexbeach.jpg',
    },
  ];
  getCocktails(): any {
    return this.cocktail;
  }
}
