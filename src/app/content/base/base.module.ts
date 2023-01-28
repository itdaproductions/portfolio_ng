import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { BaseComponent } from './base.component';
import { BaseRoutingModule } from './base.routing';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [BaseComponent, HeaderComponent],
  imports: [CommonModule, SharedModule, TranslateModule, BaseRoutingModule],
})
export class BaseModule {}
