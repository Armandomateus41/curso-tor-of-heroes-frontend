import { HEROES } from './../mock-heroes';
import { hero } from './../hero.model';
import { Component, } from '@angular/core';

@Component({
  selector: 'app-heores',
  templateUrl: './heores.component.html',
  styleUrls: ['./heores.component.scss']
})
export class HeoresComponent{
hero:  hero =   {
id: 1,
name:'wolverine'
  };
 
heroes =HEROES;
selectedHero?: hero;

onSelect(hero: hero): void {
this.selectedHero = hero;
  }
}
