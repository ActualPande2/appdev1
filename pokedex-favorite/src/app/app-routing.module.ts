import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { FalknerComponent } from './falkner/falkner.component';
import { BugsyComponent } from './bugsy/bugsy.component';
import { WhitneyComponent } from './whitney/whitney.component';
import { MortyComponent } from './morty/morty.component';
import { ChuckComponent } from './chuck/chuck.component';
import { JasmineComponent } from './jasmine/jasmine.component';
import { PryceComponent } from './pryce/pryce.component';
import { ClairComponent } from './clair/clair.component';
import { TrainerProfile } from './trainer-profile/trainer-profile';
import { Consumables } from './consumables/consumables';
import { Consumable2 } from './consumable2/consumable2';
import { Victini } from './victini/victini';
import { Gardevoir } from './gardevoir/gardevoir';
import { Delphox } from './delphox/delphox';
import { Lopunny } from './lopunny/lopunny';
import { Ditto } from './ditto/ditto';
import { Meowscarada } from './meowscarada/meowscarada';
import { Espeon } from './espeon/espeon';
import { Umbreon } from './umbreon/umbreon';
import { Chikorita } from './chikorita/chikorita';
import { Cyndaquil } from './cyndaquil/cyndaquil';
import { Totodile } from './totodile/totodile';
import { Ampharos } from './ampharos/ampharos';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'falkner', component: FalknerComponent},
  {path: 'bugsy', component: BugsyComponent},
  {path: 'whitney', component: WhitneyComponent},
  {path: 'morty', component: MortyComponent},
  {path: 'chuck', component: ChuckComponent},
  {path: 'jasmine', component: JasmineComponent},
  {path: 'pryce', component: PryceComponent},
  {path: 'clair', component: ClairComponent},
  {path: 'trainer-profile', component: TrainerProfile},
  {path: 'consumables', component: Consumables},
  {path: 'consumables2', component: Consumable2},
  {path: 'victini', component: Victini},
  {path: 'gardevoir', component: Gardevoir},
  {path: 'delphox', component: Delphox},
  {path: 'lopunny', component: Lopunny},
  {path: 'ditto', component: Ditto},
  {path: 'meowscarada', component: Meowscarada},
  {path: 'espeon', component: Espeon},
  {path: 'umbreon', component: Umbreon},
  {path: 'chikorita', component: Chikorita},
  {path: 'cyndaquil', component: Cyndaquil},
  {path: 'totodile', component: Totodile},
  {path: 'ampharos', component: Ampharos}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
