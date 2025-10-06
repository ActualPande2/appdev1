import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LandingComponent } from './landing/landing.component';
import { FalknerComponent } from './falkner/falkner.component';
import { BugsyComponent } from './bugsy/bugsy.component';
import { WhitneyComponent } from './whitney/whitney.component';
import { MortyComponent } from './morty/morty.component';
import { ChuckComponent } from './chuck/chuck.component';
import { JasmineComponent } from './jasmine/jasmine.component';
import { PryceComponent } from './pryce/pryce.component';
import { ClairComponent } from './clair/clair.component';
import { LeaderList } from './leader-list/leader-list';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LandingComponent,
    FalknerComponent,
    BugsyComponent,
    WhitneyComponent,
    MortyComponent,
    ChuckComponent,
    JasmineComponent,
    PryceComponent,
    ClairComponent,
    LeaderList,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
