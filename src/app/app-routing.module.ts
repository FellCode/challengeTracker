import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GamesComponent } from './pages/games/games.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { GamesResolverService } from './services/games-resolver.service';

const routes: Routes = [
  {path: '', pathMatch:"full", redirectTo: '/dashboard'},
  {path: 'dashboard', component: DashboardComponent, resolve: [GamesResolverService]},
  {path: 'games', component: GamesComponent, resolve: [GamesResolverService]},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
