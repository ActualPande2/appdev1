import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { WaterPokemon } from './water-pokemon/water-pokemon';
import { FirePokemon } from './fire-pokemon/fire-pokemon';
import { GrassPokemon } from './grass-pokemon/grass-pokemon';

@NgModule({
  declarations: [
    App,
    WaterPokemon,
    FirePokemon,
    GrassPokemon
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
