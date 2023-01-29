import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselComponent } from './carousel/carousel.component';
import { CustomerReviewComponent } from './customer-review/customer-review.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HeroComponent,
    CarouselComponent,
    CustomerReviewComponent,
    FooterComponent,
  ],
  imports: [CommonModule, TranslateModule],
  exports: [
    NavbarComponent,
    HeroComponent,
    CarouselComponent,
    CustomerReviewComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
