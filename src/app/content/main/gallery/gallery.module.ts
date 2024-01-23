import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryRoutingModule } from './gallery.routing';
import { SharedModule } from '../../../shared/shared.module';
import { GalleryCategoryComponent } from './gallery-category/gallery-category.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [GalleryComponent, GalleryCategoryComponent],
  imports: [CommonModule, GalleryRoutingModule, SharedModule, TranslateModule],
})
export class GalleryModule {}
