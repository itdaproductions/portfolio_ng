import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

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
    return this.http.get(this.URL).pipe(
      map((data) => {
        return data as GalleryData[];
      })
    );
  }
}
