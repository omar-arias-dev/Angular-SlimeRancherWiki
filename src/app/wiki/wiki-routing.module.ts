import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlimesPageComponent } from './pages/slimes-page/slimes-page.component';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { FoodsPageComponent } from './pages/foods-page/foods-page.component';
import { ToysPageComponent } from './pages/toys-page/toys-page.component';
import { SlimeDetailsPageComponent } from './pages/slime-details-page/slime-details-page.component';

const routes: Routes = [
    {
        path: 'slimes',
        component: SlimesPageComponent,
    },
    {
        path: 'locations',
        component: LocationsPageComponent,
    },
    {
        path: 'foods',
        component: FoodsPageComponent,
    },
    {
        path: 'toys',
        component: ToysPageComponent,
    },
    {
        path: 'slimes/:id',
        component: SlimeDetailsPageComponent,
    },
    {
        path: '**',
        redirectTo: 'slimes',
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
    declarations: [],
    providers: [],
})
export class WikiRoutingModule { }
