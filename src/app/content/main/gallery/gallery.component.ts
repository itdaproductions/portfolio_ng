import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Media } from 'src/app/shared/media/media.component';

interface Image {
  name: string;
  path: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() medias: Media[] = [
    {
      key: 'design',
      title: 'Design',
      description: '',
      buttonLabel: 'Check it out',
    },
    { key: 'digital', title: 'Digital', description: 'test', buttonLabel: '' },
    {
      key: 'tradicional',
      title: 'Tradicional',
      description: '',
      buttonLabel: '',
    },
    {
      key: 'sculpture',
      title: 'Escultura',
      description: 'test',
      buttonLabel: 'Check it out',
    },
    {
      key: 'music',
      title: 'Music',
      description: 'test',
      buttonLabel: 'Check it out',
    },
  ];

  images$: Observable<Image[]> = new Observable<Image[]>();

  constructor() {}

  imageUrls: string[] = [];

  ngOnInit(): void {}
}
