import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ContainerNavComponent } from './components/container-nav/container-nav.component';
import {ReactiveFormsModule} from "@angular/forms";

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
