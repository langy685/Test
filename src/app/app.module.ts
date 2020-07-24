import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { AppRoutingModule } from './app-routing.module';
import { ContainerNavComponent } from './components/container-nav/container-nav.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    AppContainerComponent,
    WelcomeComponent,
    ContainerNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
