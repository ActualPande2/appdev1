import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
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
import { TrainerProfile } from './trainer-profile/trainer-profile';
import { ReactiveFormsModule } from '@angular/forms';
import { Victini } from './victini/victini';
import { Gardevoir } from './gardevoir/gardevoir';
import { Delphox } from './delphox/delphox';
import { Lopunny } from './lopunny/lopunny';
import { Ditto } from './ditto/ditto';
import { Meowscarada } from './meowscarada/meowscarada';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';



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
    Victini,
    Gardevoir,
    Delphox,
    Lopunny,
    Ditto,
    Meowscarada
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TrainerProfile,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
