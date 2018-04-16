import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { routing } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

export const imports = [
  BrowserModule, HttpClientModule, BrowserAnimationsModule, AppMaterialModule,
  routing, ReactiveFormsModule, FormsModule
];
