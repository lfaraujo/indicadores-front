import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableModule } from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import { HeaderComponent } from './header/header.component';
import { PaginaUploadComponent } from './pagina-upload/pagina-upload.component';
import { IndicadorComponent } from './indicador/indicador.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginaUploadComponent,
    IndicadorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ToolbarModule,
    TooltipModule,
    ButtonModule,
    FileUploadModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
