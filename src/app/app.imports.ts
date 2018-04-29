import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';

export const imports = [
  BrowserModule, HttpClientModule, BrowserAnimationsModule, AppMaterialModule,
  routing, FormsModule, PdfViewerModule
];
