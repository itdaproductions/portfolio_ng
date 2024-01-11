import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import {
  GalleryData,
  GalleryFiles,
  PortfolioGallery,
} from '../../../../assets/gallery/data';

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

  static mapFromGalleryResponseToGalleryData(data: any[]): GalleryData[] {
    return data.map((item: any) => {
      const galleryData: GalleryData = {
        directoryUrl: item.directoryUrl,
        directoryTitle: item.directoryTitle,
        directoryDescription: item.directoryDescription,
        images: item.images.map((image: any) => {
          const galleryFile: GalleryFiles = {
            imageUrl: image.imageUrl,
            imageTitle: image.imageTitle,
            imageDescription: image.imageDescription,
          };
          return galleryFile;
        }),
      };
      return galleryData;
    });
  }
}
