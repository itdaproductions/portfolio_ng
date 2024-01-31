import { Component, Input, OnInit } from '@angular/core';
import { ButtonOptions } from '../standalone/button/button.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() description: string = '';
  @Input() buttonLabel: string = '';
  @Input() buttons: (ButtonOptions & { label: string; url: string })[] = [
    {
      label: 'components-portfolio-hero-contacts-label',
      url: '/contacts',
    },
    {
      label: 'components-portfolio-hero-portfolio-label',
      url: '/portfolio',
      primary: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
