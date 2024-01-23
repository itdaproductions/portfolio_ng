import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryCategoryComponent } from './gallery-category/gallery-category.component';
import { GalleryComponent } from './gallery.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gallery',
    pathMatch: 'full',
  },
  {
    path: 'gallery',
    component: GalleryCategoryComponent,
  },
  {
    path: 'gallery/:galleryCategory',
    component: GalleryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
