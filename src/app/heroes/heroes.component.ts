import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { HeroModel } from '../modeles/Hero.model';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  /*hero: HeroModel = {
    id: 1,
    name: 'Windstorm'
  };*/
  //heroes = HEROES;
  selectedHero?: HeroModel;
  
  heroes: HeroModel[] = [];

  constructor(private heroService: HeroService){}


  onSelect(id: number, ): void {
    for (let hero of this.heroes)
    {
      if(hero.id === id)
      {
        this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
      }
    }

  }
  ngOnInit(): void {
    this.getHeroes();
  }
  
 /* onSelect(hero: HeroModel): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }*/

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as HeroModel)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }


}
