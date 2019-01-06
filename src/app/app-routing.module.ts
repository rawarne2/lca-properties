import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomesComponent } from './homes/homes.component';
import { PrinectionComponent } from './prinection/prinection.component';
import { BlackstoneComponent } from './blackstone/blackstone.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

const routes: Routes = [
  { path: 'homes', component: HomesComponent }, 
  { path: 'princeton', component: PrinectionComponent },
  { path: 'blackstone', component: BlackstoneComponent }, 
  { path: 'contacts', component: ContactComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: '', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
