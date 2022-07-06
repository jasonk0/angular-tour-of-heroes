import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes?: Hero[]
 
  constructor(private heroService: HeroService) { }

  ngOnInit() {
   this.getHeroes()
  }
  getHeroes() {
     this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes )// 订阅可观察对象的值，等到http响应后，将value赋值给this.heroes
  }
  trackByItems(index:number,hero:Hero) {
    return hero.id
  }

  add(heroName: string):void {
    heroName = heroName.trim()
    if (!heroName) return;
    this.heroService.addHero({ name:heroName } as Hero)
      .subscribe(
       hero => this.heroes?.push(hero)
      )
  }
  delete(hero: Hero):void {
    this.heroes = this.heroes?.filter(h => h !== hero) // 先将本组件中要删除的英雄删除掉
    this.heroService.deleteHero(hero).subscribe()
  }
  
}
