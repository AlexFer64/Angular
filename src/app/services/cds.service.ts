import { Injectable } from '@angular/core';
import { CD } from '../models/cd';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor() { }

  getAllCDs(): CD[] {
    return [
      {
        id: 1,
        title : "The Dark Side of the Moon",
        author : "Pink Floyd",
        price : 12.99,
        thumbnail : "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
        releaseDate : new Date(1973, 3, 1),
        quantity : 10,
        onSale : true
      },
      {
        id : 2,
        title : "The Wall",
        author : "Pink Floyd",
        price : 12.99,
        thumbnail : "https://upload.wikimedia.org/wikipedia/en/0/0b/The_Wall_%28Pink_Floyd_album_-_cover_art%29.png",
        releaseDate : new Date(1979, 11, 1),
        quantity : 230,
        onSale : true
      },
      {
        id : 3,
        title : "Wish You Were Here",
        author : "Pink Floyd",
        price : 12.99,
        thumbnail : "https://upload.wikimedia.org/wikipedia/en/7/7f/Pink_Floyd_-_Wish_You_Were_Here.png",
        releaseDate : new Date(1975, 9, 1),
        quantity : 0,
        onSale : true
      },
      {
        id : 4,
        title : "Doolitle",
        author : "Pixies",
        price : 12.99,
        thumbnail : "https://upload.wikimedia.org/wikipedia/en/3/3b/Doolittle_%28Pixies_album_-_cover_art%29.png",
        releaseDate : new Date(1989, 4, 1),
        quantity : 10,
        onSale : true
      }
    ];
  }
}
