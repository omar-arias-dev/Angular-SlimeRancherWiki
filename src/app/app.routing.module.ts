import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';


const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'contact',
        component: ContactPageComponent,
    },
    {
        path: 'wiki',
        loadChildren: () => import('./wiki/wiki.module').then(module => module.WikiModule),
    },
    {
        path: '**',
        redirectTo: '',
    },
]

@NgModule({
    declarations: [],
    exports: [
        RouterModule,
    ],
    imports: [
        RouterModule.forRoot(routes),
    ],
    providers: [],
})
export class AppRoutingModule { }
