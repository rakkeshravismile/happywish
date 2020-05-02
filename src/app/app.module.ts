import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { Ng2OdometerModule } from 'ng2-odometer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { CounterComponent } from './counter/counter.component';
import { CalendarComponent } from './calendar/calendar.component';
import { Gallery16Component } from './gallery16/gallery16.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Gallery17Component } from './gallery17/gallery17.component';
import { Gallery18Component } from './gallery18/gallery18.component';
import { Gallery19to20Component } from './gallery19to20/gallery19to20.component';
import { MagicalnameComponent } from './magicalname/magicalname.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    CounterComponent,
    CalendarComponent,
    Gallery16Component,
    Gallery17Component,
    Gallery18Component,
    Gallery19to20Component,
    MagicalnameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2OdometerModule.forRoot(),
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [Gallery16Component, Gallery17Component, Gallery18Component, Gallery19to20Component]
})
export class AppModule { }
