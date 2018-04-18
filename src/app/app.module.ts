import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { components } from './app.components';
import { imports } from './app.imports';

import { AppComponent } from './root/app.component';

@NgModule({
  declarations: [ components ],
  imports: [ imports ],
  entryComponents: [ components ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
