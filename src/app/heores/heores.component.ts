import { HeroService } from './../hero.service';
import { hero } from './../hero.model';
import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-heores',
  templateUrl: './heores.component.html',
  styleUrls: ['./heores.component.scss']
})
export class HeoresComponent implements OnInit{
hero:  hero =   {
id: 1,
name:'wolverine'
  };
 
heroes: hero[] = [];
selectedHero?: hero;

constructor(private HeroService:   HeroService) {}
 
ngOnInit(): void {
  this.getHeroes(); 
}

getHeroes(): void {
//this.HeroService.getHeroes().subscribe ((heores)=>   ( this.heroes = heores));
this.HeroService.getHeroes().subscribe( {
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
}      


);
}
 
onSelect(hero: hero): void {
this.selectedHero = hero;
  }
}
