import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { ContactComponent } from './components/contact/contact.component';


const appRoutes: Routes = [
	{ path: '', component: ContentComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
