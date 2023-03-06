import { Component, Input, OnInit } from '@angular/core';
import { Media } from 'src/app/shared/media/media.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  @Input() title: string = 'Categories';
  @Input() medias: Media[] = [
    { title: 'Design', description: 'test', buttonLabel: 'Check it out' },
    { title: 'Digital', description: 'test', buttonLabel: 'Check it out' },
    { title: 'Tradicional', description: 'test', buttonLabel: 'Check it out' },
    { title: 'Escultura', description: 'test', buttonLabel: 'Check it out' },
    { title: 'Music', description: 'test', buttonLabel: 'Check it out' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
