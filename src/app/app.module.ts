import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MwheaderComponent } from './mwheader/mwheader.component';
import { MwnavComponent } from './mwnav/mwnav.component';
import { MwmainComponent } from './mwmain/mwmain.component';
import { MwfooterComponent } from './mwfooter/mwfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    MwheaderComponent,
    MwnavComponent,
    MwmainComponent,
    MwfooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
