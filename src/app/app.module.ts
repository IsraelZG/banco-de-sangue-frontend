import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';


import { ListaEstadoComponent } from './components/lista-estado/lista-estado.component';
import { ImcMedioComponent } from './components/imc-medio/imc-medio.component';
import { ObesosComponent } from './components/obesos/obesos.component';
import { IdadeMediaComponent } from './components/idade-media/idade-media.component';
import { DoadoresPorReceptorComponent } from './components/doadores-por-receptor/doadores-por-receptor.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatDividerModule} from '@angular/material/divider'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListaEstadoComponent,
    ImcMedioComponent,
    ObesosComponent,
    IdadeMediaComponent,
    DoadoresPorReceptorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
