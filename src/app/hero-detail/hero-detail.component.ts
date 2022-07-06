import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero()
  }
  getHero() {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.heroService.getHero(Number(id)).subscribe(hero => this.hero = hero)
  }
  goBack() {
    this.location.back()
  }
  save(hero: Hero) {
    if (this.hero) {
      this.heroService.updataHero(hero).subscribe(
        () => this.goBack()
      )
    }
  }
}
