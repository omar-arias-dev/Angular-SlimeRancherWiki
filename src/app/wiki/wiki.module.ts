import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikiRoutingModule } from './wiki-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FoodsPageComponent } from './pages/foods-page/foods-page.component';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { SlimesPageComponent } from './pages/slimes-page/slimes-page.component';
import { ToysPageComponent } from './pages/toys-page/toys-page.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { SlimeDetailsPageComponent } from './pages/slime-details-page/slime-details-page.component';


@NgModule({
  declarations: [
    FoodsPageComponent,
    LocationsPageComponent,
    SlimesPageComponent,
    ToysPageComponent,
    CardComponent,
    SlimeDetailsPageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    WikiRoutingModule,
    SharedModule,
  ],
})
export class WikiModule { }
