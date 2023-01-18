import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { HeroComponent } from '../../shared/hero/hero.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SharedModule, TranslateModule],
  exports: [HeaderComponent, HeroComponent],
})
export class BaseModule {}
