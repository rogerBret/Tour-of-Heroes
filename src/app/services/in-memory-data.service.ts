import { Injectable } from '@angular/core';
import { HeroModel } from '../modeles/Hero.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Capitain America', subtitle:'marvel heroes', img: './assets/imgs/captain-america-0020-tiny.jpg', detail: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.' },
      { id: 13, name: 'Docteur Strange', subtitle:'marvel heroes', img: './assets/imgs/doctorstrange-dsmom-imgprofil-1.jpg', detail: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.' },
      { id: 14, name: 'Hulke', subtitle:'marvel heroes', img: './assets/imgs/Hulk_in_the_She-Hulk_series_-_Infobox.webp', detail: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.' },
      { id: 15, name: 'Tony Stark', subtitle:'marvel heroes', img: './assets/imgs/Ironman-endgameprofile.webp', detail: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.' },
      { id: 16, name: 'Natasha Romanof', subtitle:'marvel heroes', img: './assets/imgs/bwendgame.jpg', detail: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.' },
      { id: 17, name: 'Spider Man', subtitle:'marvel heroes', img: './assets/imgs/pexels-photo-2854693.jpeg', detail: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.' },
      { id: 18, name: 'Deadpool', subtitle:'marvel heroes', img: './assets/imgs/2913818lpw-2926710-jpg_3363117.jpg', detail: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.' },
      { id: 19, name: 'War Machine', subtitle:'marvel heroes', img: './assets/imgs/WarMachine-EndgameProfile.webp', detail: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.' },
      { id: 20, name: 'Thor', subtitle:'marvel heroes', img: './assets/imgs/thorl-t-imgprofil.jpg', detail: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: HeroModel[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
