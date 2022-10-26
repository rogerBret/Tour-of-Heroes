import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SingleHeroComponent } from './single-hero/single-hero.component';

const routes: Routes = [
  {path:'dashboard', component: DashboardComponent},
  {path:'detail/:id', component:SingleHeroComponent},
  {path:'heroes', component: HeroesComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
