import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { Falkner } from './falkner/falkner';
import { Bugsy } from './bugsy/bugsy';
import { Whitney } from './whitney/whitney';
import { Morty } from './morty/morty';
import { Chuck } from './chuck/chuck';
import { Jasmine } from './jasmine/jasmine';
import { Pryce } from './pryce/pryce';
import { Clair } from './clair/clair';

const routes: Routes = [
  {path: '', component: Landing},
  {path: 'falkner', component: Falkner},
  {path: 'bugsy', component: Bugsy},
  {path: 'whitney', component: Whitney},
  {path: 'morty', component: Morty},
  {path: 'chuck', component: Chuck},
  {path: 'jasmine', component: Jasmine},
  {path: 'pryce', component: Pryce},
  {path: 'clair', component: Clair},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
