import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { ContactComponent } from './components/contact/contact.component';
import { DigitalComponent } from './components/digital/digital.component';


const appRoutes: Routes = [
	{ path: '', component: ContentComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'digital', component: DigitalComponent },
	{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
