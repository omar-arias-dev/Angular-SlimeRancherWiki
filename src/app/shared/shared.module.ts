import { NgModule } from '@angular/core';

import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ContactPageComponent,
        HomePageComponent,
        NavbarComponent,
        SearchFormComponent,
    ],
    imports: [
        RouterModule,
        FormsModule,
    ],
    exports: [
        ContactPageComponent,
        HomePageComponent,
        NavbarComponent,
        SearchFormComponent,
    ],
    providers: [],
})
export class SharedModule { }
