import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselComponent } from './carousel/carousel.component';
import { CustomerReviewComponent } from './customer-review/customer-review.component';
import { FooterComponent } from './footer/footer.component';
import { MediaComponent } from './media/media.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    HeroComponent,
    CarouselComponent,
    CustomerReviewComponent,
    FooterComponent,
    MediaComponent,
  ],
  imports: [CommonModule, TranslateModule, RouterModule],
  exports: [
    NavbarComponent,
    HeroComponent,
    CarouselComponent,
    CustomerReviewComponent,
    FooterComponent,
    MediaComponent,
  ],
})
export class SharedModule {}
