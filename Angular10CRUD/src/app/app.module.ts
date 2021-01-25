import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddNWN2CharComponent } from './components/add-nwn2char/add-nwn2char.component';
import { NWN2CharsListComponent } from './components/nwn2chars-list/nwn2chars-list.component';
import { NWN2CharDetailsComponent } from './components/nwn2char-details/nwn2char-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNWN2CharComponent,
    NWN2CharsListComponent,
    NWN2CharDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
