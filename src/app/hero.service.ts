import { hero } from './hero.model';
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes():  Observable<hero[]> {
    const heores = of( HEROES); 
    return heores;
  }
}
