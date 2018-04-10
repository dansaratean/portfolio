import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { routing } from './app.routing';

export const imports = [
  BrowserModule, BrowserAnimationsModule, AppMaterialModule,
  routing,
];
