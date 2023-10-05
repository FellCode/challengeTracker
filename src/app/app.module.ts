import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GamesComponent } from './pages/games/games.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HeaderComponent } from './header/header.component';
import { StatisticFieldsetComponent } from './components/statistic-fieldset/statistic-fieldset.component';
import { HeroComponent } from './components/hero/hero.component';
import {MatButtonModule} from '@angular/material/button';
import { TitleComponent } from './components/title/title.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GamesComponent,
    SettingsComponent,
    HeaderComponent,
    StatisticFieldsetComponent,
    HeroComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
