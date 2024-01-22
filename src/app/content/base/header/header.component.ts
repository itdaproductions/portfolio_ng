import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../main/gallery/gallery.service';
import { NavbarMenu } from '../../../shared/navbar/navbar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerTitle: string = 'component-company-title';

  navbarMenuData: NavbarMenu[] = [
    {
      label: 'components-navbar-menu-label-portfolio',
      url: 'portfolio',
      items: [],
    },
  ];

  constructor(private gallerySvc: GalleryService) {}

  ngOnInit(): void {
    const x = this.gallerySvc.galleryData.subscribe((data) => {
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
}
