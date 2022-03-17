import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { ShellComponent } from './home/shell/shell.component';
import { MenuComponent } from './home/menu/menu.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { PostData } from './posts/post-data';

// https://github.com/DeborahK/Angular-NgRx-GettingStarted

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(PostData),
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
  ],
  declarations: [AppComponent, ShellComponent, MenuComponent, WelcomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
