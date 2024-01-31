import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Media } from 'src/app/shared/media/media.component';
import { GalleryService } from '../gallery.service';

interface GalleryCategory {
  category: Media;
  content: Media[];
}

@Component({
  selector: 'app-gallery-category',
  templateUrl: './gallery-category.component.html',
  styleUrls: ['./gallery-category.component.scss'],
  providers: [GalleryService],
})
export class GalleryCategoryComponent implements OnInit {
  @Input() title: string = 'Categories';
  @Input() medias: Media[] = [];

  galleryCategoryData: GalleryCategory[] = [];

  constructor(
    private router: Router,
    private gallerySvc: GalleryService,
  ) {}

  ngOnInit(): void {
    const x = this.gallerySvc.galleryData.subscribe((data) => {
      if (data?.length > 0) {
        data.forEach((gallery) => {
          this.galleryCategoryData.push({
            category: {
              id: gallery.directoryUrl,
              title: gallery.directoryTitle,
              description: gallery.directoryDescription,
              url: '',
              displayMedia: gallery.directoryDisplayMedia,
            },
            content: gallery.media.map((image) => {
              return {
                id: image.url,
                url:
                  image.type === 'video'
                    ? image.url
                    : '../../../assets/gallery/' +
                      gallery.directoryUrl +
                      '/' +
                      image.url,
                title: image.title,
                description: image.description,
              };
            }),
          });
        });
      } else {
        this.router.navigate([this.router.url, 'error']);
      }
    });
  }

  onClickedMedia(key: string): void {
    if (key) {
      this.router.navigate([this.router.url, key]);
    }
  }

  onClickedButton(key: string): void {
    if (key) {
      this.router.navigate([this.router.url, key]);
    }
  }
}
