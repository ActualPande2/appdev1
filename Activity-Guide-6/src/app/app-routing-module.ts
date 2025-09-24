import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Meditations } from './meditations/meditations';
import { TaotechingComponent } from './taoteching/taoteching.component';

const routes: Routes = [
  { path: 'meditations', component: Meditations, data: { title: 'The Meditations of Marcus Aurelius' } },
  { path: 'taoteching', component: TaotechingComponent, data: { title: 'Tao Te Ching' } },
  { path: '', redirectTo: '/meditations', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
