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
  {path: 'trainer-profile', component: TrainerProfile}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
