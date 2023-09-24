import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GamesComponent } from './pages/games/games.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {path: '', pathMatch:"full", redirectTo: '/dashboard'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'games', component: GamesComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
