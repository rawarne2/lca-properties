import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PrincetonComponent } from './princeton/prinection.component';
import { BlackstoneComponent } from './blackstone/blackstone.component';
import { HomesComponent } from './homes/homes.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { GalleriaModule } from 'primeng/galleria';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincetonComponent,
    BlackstoneComponent,
    HomesComponent,
    ContactComponent,
    MainComponent,
    MaintenanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabMenuModule,
    CardModule,
    DropdownModule,
    InputTextModule,
    GalleriaModule,
    ParallaxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
