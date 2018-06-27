import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import {AboutmeComponent } from './aboutme/aboutme.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent ,
    AboutmeComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path : 'home', component:HomeComponent},
      {path : 'about-me', component:AboutmeComponent},
      {path : 'skills', component:SkillsComponent},
      {path : '**' , component : HomeComponent}

    ]), 
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
