import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Media } from 'src/app/shared/media/media.component';
import { GalleryService } from './gallery.service';
import { ActivatedRoute } from '@angular/router';

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
  currentGalleryDirectoryUrl: string = '';
  galleryTitle: string = '';

  private routeSub: Subscription = new Subscription();
  private gallerySub: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private gallerySvc: GalleryService,
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.currentGalleryDirectoryUrl = params['galleryCategory'];
      this.updateGalleryData();
    });
  }

  updateGalleryData(): void {
    this.gallerySub = this.gallerySvc.galleryData.subscribe((data) => {
      if (data?.length > 0) {
        this.galleryTitle = '';
        this.medias = [];
        data.forEach((gallery) => {
          if (gallery.directoryUrl === this.currentGalleryDirectoryUrl) {
            this.galleryTitle = gallery.directoryTitle;

            this.medias = gallery.media.map((media) => {
              return {
                id: media.url,
                url:
                  media.type === 'video'
                    ? media.url
                    : '../../../assets/gallery/' +
                      gallery.directoryUrl +
                      '/' +
                      media.url,
                title: media.title,
                description: media.description,
                type: media.type,
              };
            });
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    if (this.gallerySub) {
      this.gallerySub.unsubscribe();
    }
  }
}
