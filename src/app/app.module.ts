import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutComponent } from './components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntroComponent } from './components/intro/intro.component';
import { JournalCardComponent } from './components/journal-card/journal-card.component';
import { ResultsComponent } from './components/results/results.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { ConferenceCardComponent } from './components/conference-card/conference-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutComponent,
    IntroComponent,
    JournalCardComponent,
    ResultsComponent,
    ConferenceCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxPageScrollCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
