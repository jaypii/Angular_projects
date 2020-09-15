import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { SliderComponent } from './components/slider/slider.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PrivacyComponent,
    TermsComponent,
    SliderComponent,
    SlideshowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
