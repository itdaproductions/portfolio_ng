import { Component, OnInit } from '@angular/core';
import { SocialsData } from '../socials/socials.component';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  developer: string = 'Adriano Abreu Andrade';
  developerRole: string = 'Software Engineer';
  socialsData: SocialsData[] = [
    {
      type: 'linkedin',
      link: 'https://www.linkedin.com/in/adriano-abreu-andrade/',
    },
    {
      type: 'github',
      link: 'https://github.com/adrianooandrade',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
