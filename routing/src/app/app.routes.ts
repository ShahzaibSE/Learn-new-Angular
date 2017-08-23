//Components
import { HomeComponent }  from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ParameterizedRouterComponent } from './parameterized-router/parameterized-router.component';

export var routes = [
    { path : 'home', component : HomeComponent },
    { path : 'about', component : AboutComponent },
    { path : 'contact', component : ContactComponent },
    { path : 'paramRoute/:Id', component : ParameterizedRouterComponent },
    { path : 'home', redirectTo: 'home'}
];

