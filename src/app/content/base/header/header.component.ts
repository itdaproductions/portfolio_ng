import { Component, OnDestroy, OnInit } from '@angular/core';
import { GalleryService } from '../../main/gallery/gallery.service';
import { NavbarMenu } from '../../../shared/navbar/navbar.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  headerTitle: string = 'component-company-title';

  navbarMenuData: NavbarMenu[] = [
    {
      label: 'components-navbar-menu-label-portfolio',
      url: 'portfolio',
      items: [],
    },
  ];

  gallerySub = new Subscription();

  constructor(private gallerySvc: GalleryService) {}

  ngOnInit(): void {
    this.gallerySub = this.gallerySvc.galleryData.subscribe((data) => {
      if (data?.length > 0) {
        data.forEach((gallery) => {
          this.navbarMenuData[0].items.push({
            label: gallery.directoryTitle,
            url: 'gallery/' + gallery.directoryUrl,
          });
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.gallerySub) {
      this.gallerySub.unsubscribe();
    }
  }
}
