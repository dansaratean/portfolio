import { AppComponent } from './root/app.component';
import { ContentComponent } from './components/content/content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { DigitalComponent } from './components/digital/digital.component';
import { DigitalComponentDialog } from './components/digital/digital.component';
import { ContactComponentDialog } from './components/contact/contact.component';
import { GraphicalComponent } from './components/graphical/graphical.component';
import { GraphicalComponentDialog } from './components/graphical/graphical.component';
import { StringArtComponent } from './components/string-art/string-art.component';
import { StringArtComponentDialog } from './components/string-art/string-art.component';

export const components = [
  AppComponent, ContentComponent, NavbarComponent,
  ContactComponent, DigitalComponent, DigitalComponentDialog,
  ContactComponentDialog, GraphicalComponent, GraphicalComponentDialog,
  StringArtComponent, StringArtComponentDialog
];
