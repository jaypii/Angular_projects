import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Home } from './components/home/home.component'
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { ShowPhotoComponent } from './components/show-photo/show-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    AddUserComponent,
    EditUserComponent,
    UsersListComponent,
    PhotosListComponent,
    ShowPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
