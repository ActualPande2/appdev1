import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Meditations } from './meditations/meditations';
import { TaotechingComponent } from './taoteching/taoteching.component';
import { Reviews } from './reviews/reviews';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Meditations,
    TaotechingComponent,
    Reviews
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [App]
})
export class AppModule { }
