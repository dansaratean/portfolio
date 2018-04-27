import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { ContactComponent } from './components/contact/contact.component';
import { DigitalComponent } from './components/digital/digital.component';
import { GraphicalComponent } from './components/graphical/graphical.component';
import { StringArtComponent } from './components/string-art/string-art.component';


const appRoutes: Routes = [
	{ path: 'contact', component: ContactComponent },
	{ path: 'digital', component: DigitalComponent },
	{ path: 'graphical', component: GraphicalComponent },
	{ path: 'string-art', component: StringArtComponent },
	{ path: '', component: ContentComponent },
	{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
