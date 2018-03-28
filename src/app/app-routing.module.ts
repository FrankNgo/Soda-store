import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SodasComponent } from './sodas/sodas.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { SodaDetailComponent }  from './soda-detail/soda-detail.component';

const routes: Routes = [
  { path: 'sodas', component: SodasComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: SodaDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule {}
