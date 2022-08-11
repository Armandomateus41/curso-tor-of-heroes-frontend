import { hero } from './../hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heores',
  templateUrl: './heores.component.html',
  styleUrls: ['./heores.component.scss']
})
export class HeoresComponent implements OnInit {
  hero:  hero =   {
id: 1,
name:'wolverine'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
