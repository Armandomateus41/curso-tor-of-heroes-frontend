import { HeroDetailComponent  } from './hero-detail/hero-detail.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeoresComponent } from './heores/heores.component';

@NgModule({
declarations: [AppComponent, HeoresComponent, HeroDetailComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
