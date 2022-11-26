import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    NavbarComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    NavbarComponent,
    HeroComponent
  ]
})
export class SharedModule { }
