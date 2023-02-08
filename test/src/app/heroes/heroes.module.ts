import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { MaterialModule } from '../material/material.module';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';
import { SharedModule } from '../shared/shared.module';

const Components = [
  HeroesComponent,
  HeroDetailComponent
]

@NgModule({
  declarations: [Components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    HeroesRoutingModule,
    SharedModule
  ]
})
export class HeroesModule { }
