import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface GalleryFiles {
  imageUrl: string;
  imageTitle?: string;
  imageDescription?: string;
}
export interface GalleryData {
  directoryUrl: string;
  directoryTitle: string;
  directoryDescription?: string;
  images: GalleryFiles[];
}

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private http: HttpClient) {}

  private URL = '../../../../assets/gallery/data.json';

  get galleryData(): Observable<GalleryData[]> {
    return this.http.get<any[]>(this.URL).pipe(
      map((data) => {
        return GalleryService.mapFromGalleryResponseToGalleryData(data);
      })
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
