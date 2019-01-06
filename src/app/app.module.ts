import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PrinectionComponent } from './prinection/prinection.component';
import { BlackstoneComponent } from './blackstone/blackstone.component';
import { HomesComponent } from './homes/homes.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrinectionComponent,
    BlackstoneComponent,
    HomesComponent,
    ContactComponent,
    MainComponent,
    MaintenanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
