import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { GalleryData, PortfolioGallery } from '../../../../assets/gallery/data';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private http: HttpClient) {}

  get galleryData(): Observable<GalleryData[]> {
    return of(PortfolioGallery).pipe(
      map((data) => {
        return GalleryService.mapFromGalleryResponseToGalleryData(data);
      }),
    );
  }

  static mapFromGalleryResponseToGalleryData(
    data: GalleryData[],
  ): GalleryData[] {
    return data.map((item) => {
      return {
        directoryUrl: item.directoryUrl,
        directoryTitle: item.directoryTitle,
        directoryDescription: item.directoryDescription,
        directoryDisplayMedia: item.directoryDisplayMedia ?? true,
        media: item.media.map((media) => {
          return {
            url: media.url,
            title: media.title,
            description: media.description,
            type: media.type || 'image',
          };
        }),
      };
    });
  }
}
