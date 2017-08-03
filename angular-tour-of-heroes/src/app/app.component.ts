import { Component } from '@angular/core';

import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
      id: 1,
      name: 'Windstorm'
  };
  heroes = Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
      this.selectedHero = hero;
  }
}

constructor(private heroService: HeroService) { }
