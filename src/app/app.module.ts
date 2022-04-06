import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunicationModule } from './presentation/communication.module';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    CommunicationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
