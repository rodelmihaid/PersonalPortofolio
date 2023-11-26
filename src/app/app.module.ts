import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './material.module';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { RoadComponent } from './components/road/road.component';
import { ContactsComponent } from './components/contacts/contacts.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainBodyComponent,
    RoadComponent,
    ContactsComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
