import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GamesComponent } from './pages/games/games.component';
import { SettingsComponent } from './pages/settings/settings.component';

import { HeaderComponent } from './header/header.component';
import { StatisticFieldsetComponent } from './components/statistic-fieldset/statistic-fieldset.component';
import { HeroComponent } from './components/hero/hero.component';
import { TitleComponent } from './components/title/title.component';
import { ListEntryComponent } from './list-entry/list-entry.component';
import { TimerComponent } from './timer/timer.component';
import { FilterComponent } from './components/filter/filter.component';
import { EditAreaComponent } from './edit-area/edit-area.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ChipModule } from 'primeng/chip';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GamesComponent,
    SettingsComponent,
    HeaderComponent,
    StatisticFieldsetComponent,
    HeroComponent,
    TitleComponent,
    ListEntryComponent,
    TimerComponent,
    EditAreaComponent,
    FilterComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChipModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    ButtonModule,
    FieldsetModule,
    MenubarModule,
    CardModule,
    DividerModule,
    CalendarModule,
    InputNumberModule,
    InputTextareaModule,
    PaginatorModule,
    PanelModule
  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
