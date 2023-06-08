import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Media } from 'src/app/shared/media/media.component';
import { GalleryService } from './gallery.service';
import { ActivatedRoute, Router } from '@angular/router';

interface Image {
  name: string;
  path: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [GalleryService],
})
export class GalleryComponent implements OnInit, OnDestroy {
  @Input() medias: Media[] = [];

  images$: Observable<Image[]> = new Observable<Image[]>();
  currentGalleryCategory: string = '';
  galleryTitle: string = '';
  private routeSub: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private gallerySvc: GalleryService
  ) {}

  imageUrls: string[] = [];

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.currentGalleryCategory = params['galleryCategory'];
    });

    const x = this.gallerySvc.galleryData.subscribe((data) => {
      if (data?.length > 0) {
        data.forEach((gallery) => {
          if (gallery.directoryUrl === this.currentGalleryCategory) {
            this.galleryTitle = gallery.directoryTitle;

            this.medias = gallery.images.map((image) => {
              return {
                key: image.imageUrl,
                imageUrl:
                  '../../../assets/gallery/' +
                  gallery.directoryUrl +
                  '/' +
                  image.imageUrl,
                title: image.imageTitle,
                description: image.imageDescription,
              };
            });
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
