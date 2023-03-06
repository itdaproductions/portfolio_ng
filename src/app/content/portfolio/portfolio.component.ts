import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Media } from 'src/app/shared/media/media.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  @Input() title: string = 'Categories';
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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickedMedia(key: string): void {
    if (key) {
      this.router.navigate([this.router.url, `${key}`]);
    }
  }

  onClickedButton(key: string): void {
    if (key) {
      this.router.navigate([this.router.url, `${key}`]);
    }
  }
}
