import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { KeyFeaturesComponent } from './key-features/key-features.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductSpecificationsComponent } from './product-specifications/product-specifications.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    InstructionsComponent,
    KeyFeaturesComponent,
    ProductOverviewComponent,
    ProductSpecificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
