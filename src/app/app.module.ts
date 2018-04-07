import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { components } from './app.components';
import { imports } from './app.imports';


import { AppComponent } from './root/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [ components, NavbarComponent ],
  imports: [ imports ],
  entryComponents: [ components ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
