import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Falkner } from './falkner/falkner';
import { Bugsy } from './bugsy/bugsy';
import { Whitney } from './whitney/whitney';
import { Morty } from './morty/morty';
import { Chuck } from './chuck/chuck';
import { Jasmine } from './jasmine/jasmine';
import { Pryce } from './pryce/pryce';
import { Clair } from './clair/clair';
import { Landing } from './landing/landing';
import { Sidebar } from './sidebar/sidebar';

@NgModule({
  declarations: [
    App,
    Falkner,
    Bugsy,
    Whitney,
    Morty,
    Chuck,
    Jasmine,
    Pryce,
    Clair,
    Landing,
    Sidebar
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
