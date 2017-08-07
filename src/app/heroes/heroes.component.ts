import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  title = 'My Heroes'

  heroes: Hero[];

  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
